import { WorkflowItem } from './workflowItem';

export type Workflow = {
  wf_object_id: string;
  wf_author_id: string;
  wf_name: string;
  wf_description: string;

  wf_chapters: unknown[];
  wf_members: unknown[];
  comments: unknown[];
  wf_flowitems: WorkflowItem[];
};
