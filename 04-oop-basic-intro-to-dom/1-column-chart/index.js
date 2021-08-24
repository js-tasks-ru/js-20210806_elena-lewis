export default class ColumnChart {


  constructor(dataAll = {}) {

      (this.data = dataAll.data || []),
        (this.label = dataAll.label || ""),
        (this.value = dataAll.value || ""),
        (this.link = dataAll.link || ""),
        (this.formatHeading = dataAll.formatHeading);
      this.chartHeight = 50;
      this.render();
    }

    render()
    {
      const element = document.createElement("div");
      const header = this.formatHeading
        ? this.formatHeading(this.value)
        : this.value;

      element.innerHTML = `
    <div class="column-chart" style="--chart-height: 50">
        <div class="column-chart__title">
            Total ${this.label}
            <a href="/${this.link}" class="column-chart__link">View all</a>
        </div>
        <div class="column-chart__container">
            <div data-element="header" class="column-chart__header">${header}</div>
            <div data-element="body" class="column-chart__chart">
            </div>
        </div>
    </div>`;

      this.element = element.firstElementChild;
      this.update();
    }

    update()
    {
      if (!this.data.length) {
        this.element.classList.add("column-chart_loading");
        return;
      }

      const dataColumn = this.element.querySelector(".column-chart__chart");

      const dataArr = this.getColumnProps(this.data);
      dataArr.forEach((element) => {
        const column = document.createElement("div");
        column.setAttribute("style", "--value: " + element.value);
        column.setAttribute("data-tooltip", element.percent);

        dataColumn.append(column);
      });
    }

    getColumnProps(arr)
    {
      const maxValue = Math.max(...arr);
      const scale = this.chartHeight / maxValue;

      return arr.map((item) => ({
        percent: ((item / maxValue) * 100).toFixed(0) + "%",
        value: Math.floor(item * scale) + "",
      }));
    }

    remove()
    {
      this.element.remove();
    }
    destroy()
    {
      this.remove();
    }

  }




}

