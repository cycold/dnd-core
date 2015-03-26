import { DropTarget } from '..';

export class NormalTarget extends DropTarget {
  constructor(dropResult) {
    this.didCallDrop = false;
    this.didCallHover = false;
    this.dropResult = dropResult || { foo: 'bar' };
  }

  hover() {
    this.didCallHover = true;
  }

  drop() {
    this.didCallDrop = true;
    return this.dropResult;
  }
}

export class NonDroppableTarget extends DropTarget {
  constructor() {
    this.didCallDrop = false;
    this.didCallHover = false;
  }

  canDrop() {
    return false;
  }

  hover() {
    this.didCallHover = true;
  }

  drop() {
    this.didCallDrop = true;
  }
}

export class TargetWithNoDropResult extends DropTarget {
  constructor() {
    this.didCallDrop = false;
    this.didCallHover = false;
  }

  hover() {
    this.didCallHover = true;
  }

  drop() {
    this.didCallDrop = true;
  }
}

export class BadResultTarget extends DropTarget {
  drop() {
    return 42;
  }
}

export class TransformResultTarget extends DropTarget {
  constructor(transform) {
    this.transform = transform;
    this.didCallDrop = false;
    this.didCallHover = false;
  }

  hover() {
    this.didCallHover = true;
  }

  drop(monitor) {
    this.didCallDrop = true;
    const dropResult = monitor.getDropResult();
    return this.transform(dropResult);
  }
}