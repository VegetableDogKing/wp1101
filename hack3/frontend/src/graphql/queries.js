import { gql } from "@apollo/client";

export const GET_TASKS_QUERY = gql`
  query GetTasksQuery {
    tasks {
      dueDate
      id
      status
      title
      content
    }
  }
`;
