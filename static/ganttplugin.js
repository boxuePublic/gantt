const GanttChart = function () {
  return {
    data: [], // 渲染的数据
    el: null, // 挂载的元素
    options: {},
    task_cell_width: 240, // 任务单元格宽度
    // view_mode: 'day', // 视图模式, day: 日视图, week: 周视图, month: 月视图
    view_type: 'working',// 视图方式，machine: 机器视图，working: 工序视图
    permission: 'edit', // 权限, edit: 可编辑,view: 只读
    row_height: 30, // 行高
    task_height: 24, // 任务块的高度
    gantt_header_height: 40, // 表头高度
    resizer_x_left: 500, // 左侧渲染区域的宽度
    columns: [],
    operationCache: {}, // 操作缓存的
    start_time: null, // 开始时间
    end_time: null, // 结束时间
    task_start_end_data: [], // 任务开始结束时间数据
    right_content_width: 0, // 右侧宽度
    special_week: [0, 6], // 特殊日期(周六周日显示灰色)
    // special_dates: ['2024-10-01', '2024-10-02', '2024-10-03'], // 特殊日期(如节日,显示灰色)
    special_dates: [], // 特殊日期(如节日,显示灰色)
    // special_works: ['2024-09-29'], // 特殊(如补,如果在周六周日则不显示灰色,并在右上角显示”班“字样)
    special_works: [], // 特殊(如补班,如果在周六周日则不显示灰色,并在右上角显示”班“字样)
    // week_days: ['日', '一', '二', '三', '四', '五', '六'],// 星期几
    middleChange: [],// 用于编辑时临时存储下标的数组，为了防止编辑后提交不了的数据恢复
    changeCacheArr: [],// 缓存的修改数据,保留修改的下标

    scroll_top_left: 0, // 滚动条位置-左侧渲染区
    scroll_top_right: 0, // 滚动条位置-右侧渲染区
    scroll_top_thumb: 0, // 滚动条位置-右侧自定义的滚动条
    scroll_area_left: null,// 左侧滚动区域
    scroll_area_right: null,// 右侧滚动区域
    scroll_area_thumb: null,// 右侧自定义滚动条

    taskClickCallback: null, // 任务点击回调函数

    // taskResizeCallback: null, // 任务调整大小回调函数
    // taskDragCallback: null, // 任务拖拽回调函数
    // taskDeleteCallback: null, // 任务删除回调函数

    floatingPanelContent: function () { return '' },// 悬浮面板返回函数，由外部定义

    // 获取两个日期之间的数组
    getDatesBetween: function (startTime, endTime) {
      const dates = [];
      const startDate = new Date(startTime);
      const endDate = new Date(endTime);

      // 将结束日期设置为当天的最后一刻
      endDate.setHours(23, 59, 59, 999);

      while (startDate <= endDate) {
        dates.push(CustomDateFtt(startDate, 'yyyy-MM-dd'));
        startDate.setDate(startDate.getDate() + 1);
      }

      return dates;
    },

    // 获取计算开始时间(开始时间 + 距离开始时间的偏移量)
    CalculateStartTime: function (offset) {
      const _this = this;
      const gantt_start_time = new Date(this.task_start_end_data[0] + ' 00:00');
      // 获取偏移的时间
      const offset_time = offset / _this.task_cell_width * 24 * 60;// 得到分钟数
      const start_time = new Date(gantt_start_time.getTime() + offset_time * 60 * 1000);
      return CustomDateFtt(start_time, "yyyy-MM-dd hh:mm");
    },

    // 清空视图
    clear: function () {
      $(this.el).html('');
      this.task_start_end_data = []; // 清空时间数组
    },

    // 计算时间范围
    timeFrame: function () {
      console.log(this.data);
      const len = this.data.length;
      for (let i = 0; i < len; i++) {
        const item = this.data[i];
        if (i != 0) {
          if (new Date(item.planStartTime) < new Date(this.start_time)) {
            this.start_time = item.planStartTime;
          }
          if (new Date(item.planEndTime) > new Date(this.end_time)) {
            this.end_time = item.planEndTime;
          }
        } else {
          this.start_time = item.planStartTime;
          this.end_time = item.planEndTime;
        }
      }

      // 临时测试时间范围,可删
      // this.start_time = '2024-09-01 10:00';
      // this.end_time = '2024-10-30 13:00';
      console.log(`['时间范围']`, this.start_time, this.end_time);

      if (this.start_time && this.end_time) {
        const flag_time = new Date(this.start_time) <= new Date(this.end_time);
        if (flag_time) {
          this.task_start_end_data = this.getDatesBetween(
            this.start_time,
            this.end_time
          );
        }
        console.log(
          `日期数组`,
          this.task_start_end_data
        );
      }
    },

    // 初始化html结构
    initBaseHtml: function () {
      const html = '<div class="gantt_layout_wrapper">' +
        '   <div class="gantt_content_wrapper">' +
        '     <div class="gantt_left_wrapper" >' +
        '       <div class="gantt_left_header"></div>' +
        '       <div class="gantt_left_box hidden-vertical-scrollbar"></div>' +
        '     </div>' +
        '     <div class="gantt_right_wrapper">' +
        '       <div class="gantt_right_header"></div>' +
        '       <div class="gantt_right_box hidden-scrollbar"></div>' +
        '     </div>' +
        '     <div class="gantt_scrollbar__box">' +
        '       <div class="gantt_scrollbar_top"></div>' +
        '       <div class="gantt_scrollbar__bar">' +
        '         <div class="gantt_scrollbar__thumb"></div>' +
        '       </div>' +
        '     </div>' +
        '    </div>' +
        '    <div class="gantt_resizer_x"></div>' +
        '    <div class="gantt_tooltip"></div>' +
        '   </div>' +
        ' </div>';
      $(this.el).html(html);

      const headers = $(this.el).find('.gantt_layout_wrapper');
      const row_height = this.row_height;
      const task_height = this.task_height;
      const gantt_header_height = this.gantt_header_height;
      const resizer_x_left = this.resizer_x_left;

      headers.each(function () {
        this.style.setProperty('--row_height', row_height + 'px');
        this.style.setProperty('--task_height', task_height + 'px');
        this.style.setProperty(
          '--gantt_header_height',
          gantt_header_height + 'px'
        );
        this.style.setProperty('--resizer_x_left', resizer_x_left + 'px');
      });
    },

    // 渲染左侧表头
    initLeftHeader: function () {
      let html = '';
      let leftHeaderWidth = 0;
      this.columns.forEach(function (item, index) {
        leftHeaderWidth += item.width || 0;
        // let TextAlign = item.align || 'left';
        html +=
          '<div class="gantt_left_header_item" style="width:' +
          item.width +
          'px;">' +
          item.title +
          '</div>';
      });
      $(this.el)
        .find('.gantt_left_header')
        .css('width', leftHeaderWidth + 'px');

      // 给顶层元素设置 左侧区域的宽度
      const headers = $(this.el).find('.gantt_layout_wrapper');
      headers.each(function () {
        this.style.setProperty('--left_content_width', leftHeaderWidth + 'px');
      });

      $(this.el).find('.gantt_left_header').html(html);
    },

    // 渲染右侧表头
    initRightHeader: function () {
      const task_cell_width = this.task_cell_width;
      const row_height = this.row_height;
      const len = this.task_start_end_data.length;
      this.right_content_width = task_cell_width * len;
      const right_content_width = this.right_content_width + 'px';
      const right_content_height = row_height * this.data.length + 'px';

      // 给顶层元素设置 左侧区域的宽度
      const topHeaders = $(this.el).find('.gantt_layout_wrapper');
      topHeaders.each(function () {
        this.style.setProperty('--task_cell_width', task_cell_width + 'px');
        this.style.setProperty('--right_content_width', right_content_width);
        this.style.setProperty('--right_content_height', right_content_height);
      });

      let html = '';
      for (let i = 0; i < len; i++) {
        const date = this.task_start_end_data[i];
        html += `<div class="gantt_right_header_item">${date}</div>`;
      }
      // html += '<div style="width:8px;"></div>';
      $(this.el).find('.gantt_right_header').html(html);
    },

    // 计算左侧边缘定位
    calculateLeftPosition: function (startDate, targetDate) {
      const start = new Date(startDate + ' 00:00:00');
      const target = new Date(targetDate);

      const timeDiff = target.getTime() - start.getTime();

      const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

      const remainingMillis = timeDiff % (1000 * 3600 * 24);
      const hoursDiff = Math.floor(remainingMillis / (1000 * 3600));
      const minutesDiff = Math.floor((remainingMillis % (1000 * 3600)) / (1000 * 60));

      const dayFraction = (hoursDiff / 24) + (minutesDiff / 1440);

      const totalDays = daysDiff + dayFraction;

      const pixelsPerDay = this.task_cell_width;
      const leftPosition = totalDays * pixelsPerDay;

      return leftPosition;
    },

    // 计算任务宽度
    calculateTaskWidth: function (startTime, endTime) {
      // 将日期字符串转换为 Date 对象
      const start = new Date(startTime);
      const end = new Date(endTime);

      // 计算时间差（毫秒）
      const timeDiff = end.getTime() - start.getTime();

      // 将毫秒转换为天数
      const daysDiff = timeDiff / (1000 * 3600 * 24);

      // 计算总宽度
      const totalWidth = daysDiff * this.task_cell_width;

      return totalWidth;
    },

    // 左侧行内容html
    leftLineHtml: function (item_1, index_1, item_2, index_2) {
      let html = '';
      const TextAlign = item_2.align || 'left';
      if (item_2.template) {
        html = '<div class="gantt_left_cell_item" data-index_1=\'' + index_1 + '\' data-index_2=\'' + index_2 + '\' style="width:' +
          item_2.width +
          'px;text-align:' + TextAlign + ';">' +
          (item_2.template(item_1, item_2) || "") +
          '</div>';
      } else {
        html = '<div class="gantt_left_cell_item" data-index_1=\'' + index_1 + '\' data-index_2=\'' + index_2 + '\' style="width:' +
          item_2.width +
          'px;text-align:' + TextAlign + ';">' +
          item_1[item_2.field] +
          '</div>';
      }
      return html;
    },

    // 右侧渲染维护时间
    rightMaintenanceHtml: function (item_1) {
      let maintenanceHtml = '';
      const maintenanceTime = item_1.maintenanceTime || []; // 维护时间数组
      for (let i = 0; i < maintenanceTime.length; i++) {
        let start_time = maintenanceTime[i].start_time; // 开始时间
        let end_time = maintenanceTime[i].end_time; // 结束时间

        // left计算
        const left = _this.calculateLeftPosition(task_start_end_data[0], start_time);
        // width计算
        const curWidth = _this.calculateTaskWidth(start_time, end_time);

        maintenanceHtml += '<div class="gantt_maintenance_cell" style="left:' + left + 'px;width:' + curWidth + 'px;"></div>'
      }
      return maintenanceHtml;
    },

    // 右侧任务内容html
    rightTaskHtml: function (item_1, index_1) {
      const _this = this;
      const task_start_end_data = this.task_start_end_data || [];
      let taskHtml = '';

      const taskArr = item_1.taskArr || []; // 任务数组
      for (let i = 0; i < taskArr.length; i++) {
        let start_time = taskArr[i].start_time; // 开始时间
        let end_time = taskArr[i].end_time; // 结束时间

        // left计算
        const left = _this.calculateLeftPosition(task_start_end_data[0], start_time);
        // width计算
        const curWidth = _this.calculateTaskWidth(start_time, end_time);
        taskHtml += '<div class="gantt_task_cell" data-index_1=\'' + index_1 + '\' data-index_2=\'' + i + '\' style="left:' + left + 'px;width:' + curWidth + 'px;"></div>';
      }

      return taskHtml;
    },

    // 渲染行数据
    initLine: function () {
      const _this = this;
      const data = this.data || [];

      const gantt_left_box = $(this.el).find('.gantt_left_box')[0];
      const gantt_right_box = $(this.el).find('.gantt_right_box')[0];

      const columns = this.columns || [];
      const task_start_end_data = this.task_start_end_data || [];

      // 特殊时间
      const special_week = this.special_week || [];
      const special_dates = this.special_dates || [];
      const special_works = this.special_works || [];

      data.forEach(function (item_1, index_1) {
        // 左侧渲染
        let html_left = '<div class="gantt_left_line" data-index_1=\'' + index_1 + '\'>';
        columns.forEach(function (item_2, index_2) {
          html_left += _this.leftLineHtml(item_1, index_1, item_2, index_2);
        });
        html_left += '</div>';
        const fragment_leftLine = document.createDocumentFragment();
        const range_1 = document.createRange();
        const fragement_1 = range_1.createContextualFragment(html_left);
        fragment_leftLine.appendChild(fragement_1);
        gantt_left_box.appendChild(fragment_leftLine);

        // 右侧渲染--单元格组
        let groupHtml = '<div class="gantt_cell_group">'; // 单元格组
        task_start_end_data.forEach(function (item_2, index_2) {
          let curClass = 'gantt_cell_item';
          var dayIndex = new Date(item_2).getDay();
          const curDay = CustomDateFtt(item_2, 'yyyy-MM-dd');
          if (special_works.includes(curDay)) {
            //
          } else if (special_dates.includes(curDay)) {
            curClass += ' weekend';
          } else if (special_week.includes(dayIndex)) {
            curClass += ' weekend';
          }

          groupHtml += '<div class="' + curClass + '"></div>';
        });

        // 右侧渲染--维护时间
        let maintenanceHtml = '<div class="gantt_maintenance_group">';
        maintenanceHtml += _this.rightMaintenanceHtml(item_1);

        // 右侧渲染--任务
        let taskHtml = '<div class="gantt_task_group">'; // 任务组的渲染
        taskHtml += _this.rightTaskHtml(item_1, index_1);

        // 右侧渲染
        let html_right = '<div class="gantt_right_line" data-index_1=\'' + index_1 + '\'>';
        html_right += groupHtml + '</div>';
        html_right += maintenanceHtml + '</div>';
        html_right += taskHtml + '</div>';
        html_right += '</div>';
        const fragment_rightLine = document.createDocumentFragment();
        const range_2 = document.createRange();
        const fragement_2 = range_2.createContextualFragment(html_right);
        fragment_rightLine.appendChild(fragement_2);
        gantt_right_box.appendChild(fragment_rightLine);
      });
    },

    // 滚动方法
    handleScroll: function (sign) {
      // left.removeEventListener('scroll', handleScroll);  可用于解绑
      if (sign === 'left') {
        const curScrollTop = this.scroll_area_left.scrollTop;
        if (curScrollTop != this.scroll_top_left) {
          this.scroll_area_right.scrollTop = curScrollTop;
          this.scroll_area_thumb.scrollTop = curScrollTop;
          this.scroll_top_left = curScrollTop;
        }
      } else if (sign === 'right') {
        const curScrollTop = this.scroll_area_right.scrollTop;
        if (curScrollTop != this.scroll_top_right) {
          this.scroll_area_left.scrollTop = curScrollTop;
          this.scroll_area_thumb.scrollTop = curScrollTop;
          this.scroll_top_right = curScrollTop;
        }
      } else if (sign === 'thumb') {
        const curScrollTop = this.scroll_area_thumb.scrollTop;
        if (curScrollTop != this.scroll_top_thumb) {
          this.scroll_area_left.scrollTop = curScrollTop;
          this.scroll_area_right.scrollTop = curScrollTop;
          this.scroll_top_thumb = curScrollTop;
        }
      }
      // console.log(`滚动数据`, this.scroll_top_right, this.scroll_top_right, this.scroll_top_thumb);
    },

    // 滚动条同步
    scrollSync: function () {
      this.scroll_area_left = $(this.el).find('.gantt_left_box')[0];
      this.scroll_area_right = $(this.el).find('.gantt_right_box')[0];
      this.scroll_area_thumb = $(this.el).find('.gantt_scrollbar__bar')[0];

      // this.scroll_area_left.addEventListener('scroll', throttle(this.handleScroll.bind(this, 'left'), 30));
      // this.scroll_area_right.addEventListener('scroll', throttle(this.handleScroll.bind(this, 'right'), 30));
      // this.scroll_area_thumb.addEventListener('scroll', throttle(this.handleScroll.bind(this, 'thumb'), 30));

      this.scroll_area_left.addEventListener('scroll', debounce(this.handleScroll.bind(this, 'left'), 30, true));
      this.scroll_area_right.addEventListener('scroll', debounce(this.handleScroll.bind(this, 'right'), 30, true));
      this.scroll_area_thumb.addEventListener('scroll', debounce(this.handleScroll.bind(this, 'thumb'), 30, true));
    },

    // 拖拽后更新视图
    taskDrag_updateView: function (obj) {
      // 
    },

    // 任务的拖拽事件
    taskDragEvent: function () {
      const _this = this;
      let offsetX;

      $(this.el).on('mousedown', '.gantt_task_cell', function (e) {
        // 获取父元素的偏移量
        let $parent = $(this).parent();
        let parentOffset = $parent.offset();

        // 计算鼠标相对父元素的偏移量
        offsetX = e.clientX - (parentOffset.left + $(this).position().left);
        offsetY = e.clientY - (parentOffset.top + $(this).position().top);

        let $cell = $(this);

        // 设置鼠标移动和松开事件
        $(document).on('mousemove.drag', function (e) {
          const leftNum = e.clientX - parentOffset.left - offsetX;// 左侧的偏移量
          console.log(430, leftNum);
          const leftIndex = Math.floor(leftNum / _this.task_cell_width); // 左侧的索引
          console.log(432, leftIndex);

          const new_start_time = _this.CalculateStartTime(leftNum);
          console.log(`ganttplugin.js 450 [new_start_time]`, new_start_time);

          $cell.css({
            left: (e.clientX - parentOffset.left - offsetX) + 'px',
          });
        });

        $(document).on('mouseup.drag', function () {
          // 移除鼠标移动和松开事件
          $(document).off('mousemove.drag');
          $(document).off('mouseup.drag');
        });

        // 防止文本选择
        e.preventDefault();
      });
    },

    // 行双击编辑事件
    lineDoubleClickEdit: function () { },

    // 更新行显示
    updateLine: function (index_1) {
      const _this = this;
      const item_1 = _this.data[index_1];

      // 更新左侧列表显示
      let html_left = '';
      _this.columns.forEach(function (item_2, index_2) {
        html_left += _this.leftLineHtml(item_1, index_1, item_2, index_2);
      });
      $(_this.el).find('.gantt_left_line[data-index_1=\'' + index_1 + '\']').html(html_left);

      // 更新右侧任务显示
      const taskHtml = _this.rightTaskHtml(item_1, index_1);
      $(_this.el).find('.gantt_right_line[data-index_1=\'' + index_1 + '\']').find('.gantt_task_group').html(taskHtml);
    },

    // 任务编辑
    editUpdateTask: function (obj) {
      const _this = this;
      const index_1 = obj.index_1;
      const index_2 = obj.index_2;
      // 任务编辑事件
      _this.data[index_1].taskArr[index_2].start_time = obj.start_time;
      _this.data[index_1].taskArr[index_2].end_time = obj.end_time;
      if (this.view_type === 'working') {// 工序视图
        // 更改行数据时间
        _this.data[index_1].planStartTime = obj.start_time;
        _this.data[index_1].planEndTime = obj.end_time;
        _this.data[index_1].duration = calculateMinutes(obj.start_time, obj.end_time);
        // 更新行视图
        _this.updateLine(index_1);
      } else if (this.view_type === 'machine') {
        // 机器视图
      }
    },

    // 任务双击编辑
    taskDobuleClickEdit: function () {
      const _this = this;
      if (this.permission === 'edit') {
        $(this.el).on('dblclick', '.gantt_task_cell', function () {
          if (CustomGtTypeOf(_this.taskClickCallback) === 'function') {
            _this.taskClickCallback($(this), _this);
          }
        });
      }
    },

    // 任务浮动面板
    taskFloatPanel: function () {
      const _this = this;

      // 鼠标移动时显示提示框,使用 debounce
      $(this.el).on('mousemove', '.gantt_task_cell, .gantt_left_cell_item', debounce(function (event) {
        const index_1 = Number($(this).attr('data-index_1'));
        const gantt_tooltip = $(_this.el).find('.gantt_tooltip');
        // console.log(334, _this.data[index_1], index_1);
        let plane_html = _this.floatingPanelContent(_this.data[index_1] || {});
        $(gantt_tooltip).html(plane_html);

        // 初始偏移值
        let panelX = event.pageX + 4; // 向右偏移
        let panelY = event.pageY + 5; // 向下偏移

        // 获取父元素的边界矩形
        const parentOffset = $(_this.el).offset();
        const parentWidth = $(_this.el).outerWidth();
        const parentHeight = $(_this.el).outerHeight();

        // 检查提示框是否超出父元素的右边界
        if (panelX + gantt_tooltip.outerWidth() > parentOffset.left + parentWidth) {
          panelX = parentOffset.left + parentWidth - gantt_tooltip.outerWidth() - 8; // 调整以适应边界
        }

        // 检查提示框是否超出父元素的底部边界
        if (panelY + gantt_tooltip.outerHeight() > parentOffset.top + parentHeight) {
          panelY = parentOffset.top + parentHeight - gantt_tooltip.outerHeight() - 10; // 调整以适应边界
        }

        // 设置 .gantt_tooltip 的位置
        gantt_tooltip.css({
          left: panelX,
          top: panelY
        });

        gantt_tooltip.show();
      }, 50)); // debounce 时间设置为50毫秒

      // 鼠标离开时隐藏提示框,使用 debounce
      $(this.el).on('mouseleave', '.gantt_task_cell, .gantt_left_cell_item', debounce(function () {
        const gantt_tooltip = $(_this.el).find('.gantt_tooltip');
        gantt_tooltip.hide();
      }, 51)); // debounce 时间设置为51毫秒
    },

    renderChart: function () {
      this.clear(); // 清空视图
      this.timeFrame(); // 计算时间范围

      this.initBaseHtml(); // 初始化html结构
      this.initLeftHeader(); // 渲染左侧表头
      this.initRightHeader(); // 渲染右侧表头
      this.initLine(); // 渲染行数据

      this.scrollSync();// 滚动条同步

      this.taskDragEvent(); // 任务的拖拽事件
      this.taskDobuleClickEdit(); // 任务双击编辑
      this.lineDoubleClickEdit(); // 行双击编辑事件
      this.taskFloatPanel(); // 任务浮动面板
    },

    init: function (options = {}) {
      for (let key in options) {
        this[key] = options[key];
      }
      this.renderChart();
      return this;
    },
  };
};
