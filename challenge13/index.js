const lastBackup = 1546300800;
const changes = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
];

function getFilesToBackup(lastBackup, changes) {
  return [
    ...new Set(
      changes
        .filter((change) => change[1] > lastBackup)
        .map((change) => change[0])
        .sort((a, b) => a - b)
    ),
  ];
}

console.log(getFilesToBackup(lastBackup, changes));
