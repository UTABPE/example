declare module 'bpmn-js/dist/bpmn-modeler.production.min.js' {
  class Modeling {
    constructor(); // 4 args

    addLane(); // 2 args
    claimId(); // 2 args
    connect(); // 4 args
    getHandlers(); // no args
    makeCollaboration(); // no args
    makeProcess(); // 0 args
    resizeLane(); // 3 args
    setColor(); // 2 args
    splitLane(); // 2 args
    unclaimId(); // 2 args
    updateLabel(); // 4 args
    updateLaneRefs(); // 2 args
    updateModdleProperties(); // 3 args
    updateProperties(element: any, properties: Record<string, unknown>); // 2 args
  }

  type ElementType =
    | 'bpmn:StartEvent'
    | 'bpmn:Process'
    | 'bpmn:EndEvent'
    | 'bpmn:ExclusiveGateway'
    | 'bpmn:ServiceTask'
    | 'bpmn:SendTask'
    | 'bpmn:UserTask'
    | 'bpmn:ReceiveTask'
    | 'bpmn:ScriptTask'
    | 'bpmn:TextAnnotation'
    | 'bpmn:IntermediateThrowEvent';

  type Element = {
    id: string;
    type: ElementType;
    labels: any[];

    isFrame: boolean;
    collapsed: boolean;

    height: number;
    width: number;
    x: number;
    y: number;

    di: any;
    incoming: any;
    outgoing: any;
  };

  class EventBus {
    on(); // 4 args
    off(); // 2 args
    once(); // 4 args
    handleError(); // 1 arg
    createEvent(); // 1 arg
    fire(); // 2 args
  }

  class ElementRegistry {
    add(); // 3 args
    filter(fn: (el: Element) => boolean): Element | undefined; // 1 arg
    find(); // 1 arg
    forEach(); // 1 arg
    get(); // 1 arg
    getAll(); // 0 args
    getGraphics(); // 2 args
    remove(); // 1 arg
    updateGraphics(); // 3 args
    updateId(); // 2 args
    _validateId(); // 1 arg

    _elements: {
      [elementId]: {
        element: {
          id: string;
        };
        gfx: any; // DOM ref
        secondaryGfx: any; // ?
      };
    };
  }

  class BPMNFactory {
    create(); // 2 args
    createDiBounds(); // 1 arg
    createDiEdge(); // 2 args
    createDiLabel(); // 0 args
    createDiPlane(); // 2 args
    createDiShape(); // 2 args
    createDiWaypoint(); // 1 arg
    createDiWaypoints(); // 1 arg
  }

  type BPMNConnectEvent =
    | 'connect.start'
    | 'connect.end'
    | 'connect.hover'
    | 'connect.out'
    | 'connect.move'
    | 'connect.cleanup';

  type BPMNConnectionEvent =
    | 'connection.added'
    | 'connection.changed'
    | 'connection.remove'
    | 'connection.removed';

  type BPMNAttachEvent = 'attach';

  type AutoPlaceEvent = 'autoPlace' | 'autoPlace.start' | 'autoPlace.end';

  type BPMNElementEvent = 'bpmnElement.added';

  type BPMNConnectionSegmentEvent =
    | 'connectionSegment.move.cancel'
    | 'connectionSegment.move.cleanup'
    | 'connectionSegment.move.end'
    | 'connectionSegment.move.hover'
    | 'connectionSegment.move.move'
    | 'connectionSegment.move.out'
    | 'connectionSegment.move.start';

  type ContextPadEvent = 'contextPad.create' | 'contextPad.getProviders';

  type CopyPasteEvent =
    | 'copyPaste.copyElement'
    | 'copyPaste.copyTree'
    | 'copyPaste.pasteElement'
    | 'copyPaste.pasteElements';

  type ElementEvent =
    | 'element.click'
    | 'element.changed'
    | 'element.dbclick'
    | 'element.hover'
    | 'element.marker.update'
    | 'element.mousedown'
    | 'element.mousemove'
    | 'element.out'
    | 'element.updateId'
    | 'elements.changed'
    | 'elements.delete';

  type SelectionEvent = 'selection.changed';

  type CanvasEvent =
    | 'canvas.init'
    | 'canvas.resized'
    | 'canvas.destroy'
    | 'canvas.viewbox.changed'
    | 'canvas.viewbox.changing';

  type DiagramEvent = 'diagram.init' | 'diagram.move' | 'diagram.destroy';

  type HandEvent = '';

  type LassoEvent = '';

  type GlobalConnectEvent = '';

  type InteractionEvent = '';

  type DirectEditingEvent = '';

  type _KeyboardEvent = '';

  type _DragEvent = '';

  type XMLImportLifecycleEvent =
    | 'import.parse.start'
    | 'import.parse.complete'
    | 'import.render.start'
    | 'import.render.complete'
    | 'import.done';

  type ExportLifecycleEvent =
    | 'saveXML.start'
    | 'saveXML.serialized'
    | 'saveXML.done'
    | 'saveSVG.start'
    | 'saveSVG.done';

  type BMPNConnectionEvent = 'connection.added' | 'connection.changed';

  type BPMNBendpointEvent =
    | 'bendpoint.move.move'
    | 'bendpoint.move.cleanup'
    | 'bendpoint.move.start'
    | 'bendpoint.move.end'
    | 'bendpoint.move.hover'
    | 'bendpoint.move.out'
    | 'bendpoint.move.cancel';

  type CommandStackEvent =
    | 'commandStack.changed'
    | 'commandStack.canvas.updateRoot.executed'
    | 'commandStack.canvas.updateRoot.postExecute'
    | 'commandStack.canvas.updateRoot.preExecute'
    | 'commandStack.canvas.updateRoot.reverted'
    | 'commandStack.connection.create.canExecute'
    | 'commandStack.connection.create.executed'
    | 'commandStack.connection.create.postExecute'
    | 'commandStack.connection.create.postExecuted'
    | 'commandStack.connection.create.reverted'
    | 'commandStack.connection.delete.executed'
    | 'commandStack.connection.delete.preExecute'
    | 'commandStack.connection.delete.reverted'
    | 'commandStack.connection.layout.executed'
    | 'commandStack.connection.layout.postExecute'
    | 'commandStack.connection.layout.postExecuted'
    | 'commandStack.connection.layout.reverted'
    | 'commandStack.connection.move.executed'
    | 'commandStack.connection.move.preExecute'
    | 'commandStack.connection.move.reverted'
    | 'commandStack.connection.reconnect.canExecute'
    | 'commandStack.connection.reconnect.executed'
    | 'commandStack.connection.reconnect.postExecute'
    | 'commandStack.connection.reconnect.preExecute'
    | 'commandStack.connection.reconnect.reverted'
    | 'commandStack.connection.start.canExecute'
    | 'commandStack.connection.updateWaypoints.canExecute'
    | 'commandStack.connection.updateWaypoints.executed'
    | 'commandStack.connection.updateWaypoints.postExecute'
    | 'commandStack.connection.updateWaypoints.postExecuted'
    | 'commandStack.connection.updateWaypoints.reverted'; // TODO: describe more events

  type EventType =
    | XMLImportLifecycleEvent
    | ExportLifecycleEvent
    | BMPNConnectionEvent
    | BPMNBendpointEvent
    | BPMNElementEvent
    | ElementEvent;

  class BpmnJsModeler {
    constructor(config: {
      container: HTMLElement | string;
      additionalModules?: any[];
      moddleExtensions?: {
        [key: string]: any;
      };
      propertiesPanel?: {
        parent: string;
      };
    });

    on(event: EventType, callback: (...args: any[]) => void): void;

    importXML(xml: string): Promise<void>;

    saveXML(): Promise<{ xml: string }>;

    createDiagram(): Promise<void>;

    get(moduleName: 'elementRegistry'): ElementRegistry;
    get(moduleName: 'modeling'): Modeling;
    get(moduleName: 'bpmnFactory'): BPMNFactory;
    // canvas.zoom(‘fit-viewport’);

    destroy();
    instantiate(); // 1 arg
    createChild(); // 2 args

    injector: any;
  }

  export default BpmnJsModeler;
}

declare module 'bpmn-js' {
  class BpmnViewer {
    constructor(...args: any) {
      //
    }

    importXML(xml: string);
  }

  export default BpmnViewer;
}

// events:
// import.parse.complete
// diagram.destroy
