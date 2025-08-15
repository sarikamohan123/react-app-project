import OptionForm from "../components/OptionForm";
import { ResponsiveTable } from "../components/Table/ResponsiveTable";
import useEntityTable from "../hooks/useEntityTable";
import useEntityList from "../hooks/useEntityList";
import useEntityListOptions from "../hooks/useEntityListOptions";

export default function ListView() {
  //Destructuring  the custom hook to get entity list options
  const { state, method } = useEntityListOptions();
  const { entity, limit, offset } = state;
  const { setEntity, setLimit, setOffset } = method;
  //Query to fetch data from the API
  const { data, isLoading } = useEntityList({ entity, limit, offset });
  const totalCount = data?.count ?? 0;

  //Using the custom hook to convert raw data into table format
  //This hook returns the rows and columns needed for the table
  const { rows, columns } = useEntityTable(data);

  return (
    <>
      <OptionForm
        entity={entity}
        limit={limit}
        offset={offset}
        totalCount={totalCount}
        setEntity={setEntity}
        setLimit={setLimit}
        setOffset={setOffset}
      />
      <ResponsiveTable data={rows} columns={columns} isLoading={isLoading} />
    </>
  );
}
