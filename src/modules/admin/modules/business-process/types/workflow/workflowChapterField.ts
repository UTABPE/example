export type WorkflowChapterField = {
  wff_id: number;
  wfch_id: number;
  wff_name: string;
  wff_type: string;
  wff_value: string;
  wff_default_value: string;

  wff_description: string; // stringified JSON field config
  wff_actions: string; // ?

  // workflow.wf_chapters[idx1].wfch_fields[idx2].wff_groups[wf_step_idx][group_id][role][access]
  wff_groups: {
    [wf_step_idx: number]: {
      // groups - TBD
      [group_id: number]: {
        // roles: author, responsible, executor, member
        [role: string]: {
          read: boolean;
          update: boolean;
          required: boolean;
          hide: boolean;
        };
      };
    };
  };
};
