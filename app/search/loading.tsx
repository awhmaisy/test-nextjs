import Grid from 'components/grid';

export default function Loading() {
  return (
    <Grid className="grid-cols-1 lg:grid-cols-1">
      {Array(12)
        .fill(0)
        .map((_, index) => {
          return (
            <Grid.Item key={index} className="animate-pulse bg-neutral-100 dark:bg-neutral-800" />
          );
        })}
    </Grid>
  );
}
