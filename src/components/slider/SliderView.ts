import { SliderOptions } from "./SliderOptions";

// отрисовка элементов
export class SliderView extends SliderOptions {
  private wrapper: HTMLElement;
  private app: HTMLElement | any;
  line: HTMLElement;
  thumb: HTMLElement; 
  thumbMax: HTMLElement; 
  range: HTMLElement; 
  outputValueMin: HTMLElement | any;
  outputValueMax: HTMLElement | any;
  outputWrapper: HTMLElement; 
 
  thumbPositionInit: any;
  rangePositionInit: any;
  thumbMaxPositionInit: any;

  constructor() {
    super()
    console.log(this.thumbPosition);
    
    this.wrapper = document.createElement('div');
    this.app = document.getElementById('app');
    this.line = document.createElement('div');
    this.thumb = document.createElement('div');
    this.thumbMax = document.createElement('div');
    this.range = document.createElement('div');
    this.outputValueMin = document.createElement('div');
    this.outputValueMax = document.createElement('div');
    this.outputWrapper = document.createElement('div');

    this.wrapper.classList.add('wrapper');
    this.line.classList.add('line');
    this.thumb.classList.add('thumb', 'thumb-min');  
    this.thumbMax.classList.add('thumb', 'thumb-max');  
    this.range.classList.add('range');
    this.outputValueMin.classList.add('output-value');
    this.outputValueMax.classList.add('output-value');
    this.outputWrapper.classList.add('output-wrapper');

    this.app.appendChild(this.wrapper);
    this.wrapper.appendChild(this.line);
    this.line.appendChild(this.thumb);
    this.line.appendChild(this.thumbMax);
    this.line.appendChild(this.range);
    this.wrapper.prepend(this.outputWrapper);  
    this.outputWrapper.appendChild(this.outputValueMin);
    this.outputWrapper.appendChild(this.outputValueMax);
  }
}
