import {
  Directive,
  DoCheck,
  IterableDiffer,
  IterableDiffers,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[chunkedFor]',
  inputs: ['chunkedForOf', 'chunkedForBy'],
})
export class ChunkedForDirective implements DoCheck {
  private collection: any;
  private chunkSize: number = 5;
  private offset: number = 5;
  private differ: IterableDiffer<any>;
  private context = {
    $implicit: [],
    nextFn: this.nextChunk.bind(this),
    hasNext: false,
    offset: 0,
    chunkSize: 0,
  };

  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private differs: IterableDiffers
  ) {}

  set chunkedForBy(by: any) {
    this.chunkSize = by ? +by : 5;
    this.offset = 0;
  }
  set chunkedForOf(coll: any) {
    this.collection = coll || [];
    if (coll && !this.differ) {
      this.differ = this.differs.find(coll).create((value) => value);
    }
  }

  ngDoCheck() {
    if (this.differ) {
      const changes = this.differ.diff(this.collection);
      if (changes) {
        this.reset();
      }
    }
  }

  reset() {
    this.viewContainer.clear();
    this.offset = 0;
    this.nextChunk();
    const view = this.viewContainer.createEmbeddedView(
      this.template,
      this.context
    );
  }

  nextChunk(increment: number = this.chunkSize) {
    this.offset += increment;
    this.context.$implicit = this.collection.slice(0, this.offset);
    this.context.offset = this.offset;
    this.context.chunkSize = this.chunkSize;
    this.context.hasNext = this.offset < this.collection.length;
  }
}
