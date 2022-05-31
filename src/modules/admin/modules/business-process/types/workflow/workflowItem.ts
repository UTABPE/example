export type WorkflowItem = {
  fi_id: number;
  fi_name: string;
  fi_description: string;
  fi_end_date: string;
  fi_end: boolean;

  fi_current_task_id: number;

  fi_tasks: unknown[];
  wf_links: unknown[];
};
