import { StateNode } from "@tldraw/editor";

export class Idle extends StateNode {
  static override id = "idle";

  override onCancel = () => {
    this.editor.setCurrentTool("select");
  };
}