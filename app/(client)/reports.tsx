import {
  getProjectDateInto,
  getTaskToUpdateProgress,
} from "@/api/facilitator/ReportAPI";
import TasksToUpdateProgress from "@/components/TasksToUpdateProgress";
import { selectProjectId } from "@/redux/projectIdSlice";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { useSelector } from "react-redux";

const reports = () => {
  const projectId = useSelector(selectProjectId);

  const projectTaskToDos = getTaskToUpdateProgress(projectId!);

  const {
    data: projInfo,
    isLoading,
    refetch: refetchDateInfo,
  } = getProjectDateInto(projectId!);

  if (isLoading || projectTaskToDos.isLoading)
    return <ActivityIndicator size="large" />;

  return (
    <View>
      {projectId}
      <TasksToUpdateProgress
        taskToDo={projectTaskToDos.data!}
        refetch={projectTaskToDos.refetch}
        isFacilitator={true}
        refetchDateInfo={refetchDateInfo}
      />
    </View>
  );
};

export default reports;
