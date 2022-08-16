const jobTypes = [
  {
    name: 'All',
    color: 'green',
  },
  {
    name: 'Frontend',
    color: 'yellow',
  },
  {
    name: 'Backend',
    color: 'red',
  },
  {
    name: 'Contract',
    color: 'green',
  },
  {
    name: 'UI/UX',
    color: 'yellow',
  },
  {
    name: '3D Artist',
    color: 'red',
  },
  {
    name: 'Game',
    color: 'green',
  },
  {
    name: 'Video Editor',
    color: 'yellow',
  },
  {
    name: 'Discord Manager',
    color: 'red',
  },
];

type SampleData = {
    type: 'bookmark' | 'bookmarked' | 'finished' | 'failed';
    createDate: number;
    jobType: string;
    jobName: string;
    userView: number;
    userBookmarked: number;
    slackList: Array<string>;
    id: number;
};

const sampleData: Array<SampleData> = [
  {
    id: 1,
    type: 'bookmarked',
    createDate: 1660146745,
    jobName: 'Frontend Developer',
    jobType: 'Frontend',
    userView: 1234,
    userBookmarked: 1235,
    slackList: ['ruby'],
  },
  {
    id: 2,
    type: 'bookmark',
    createDate: 1660146745,
    jobName: 'Senior Contract Developer',
    jobType: 'Contract',
    userView: 1234,
    userBookmarked: 1235,
    slackList: ['ruby'],
  },
  {
    id: 3,
    type: 'bookmark',
    createDate: 1660146745,
    jobName: 'Backend Developer',
    jobType: 'Backend',
    userView: 1234,
    userBookmarked: 1235,
    slackList: ['ruby'],
  },
];

const sampleData2: Array<SampleData> = [
  {
    id: 1,
    type: 'finished',
    createDate: 1660146745,
    jobName: 'Frontend Developer',
    jobType: 'Frontend',
    userView: 1234,
    userBookmarked: 1235,
    slackList: ['ruby'],
  },
  {
    id: 2,
    type: 'finished',
    createDate: 1660146745,
    jobName: 'Senior Contract Developer',
    jobType: 'Contract',
    userView: 1234,
    userBookmarked: 1235,
    slackList: ['ruby'],
  },
  {
    id: 3,
    type: 'failed',
    createDate: 1660146745,
    jobName: 'Backend Developer',
    jobType: 'Backend',
    userView: 1234,
    userBookmarked: 1235,
    slackList: ['ruby'],
  },
];

export { jobTypes, sampleData, sampleData2 };
