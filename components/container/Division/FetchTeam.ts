"use client";
import { getTeam } from "@/utils";
import { useEffect, useState } from "react";

const fetchTheTeam = async (division: string) => {
  try {
    const userReviewData = await getTeam(division);
    return userReviewData;
  } catch (error) {
    console.error("Error fetching Team data:", error);
  }
};

const FetchTeam = (division: string) => {
  const [teamMember, setTeamMember] = useState<any>(null);
  useEffect(() => {
    setTeamMember(fetchTheTeam(division));
    return teamMember;
  }, [teamMember, division]);
};

export default FetchTeam;
