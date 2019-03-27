const square = number => number * number;
console.log(square(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  { id: 3, isActive: true }
];

const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);
