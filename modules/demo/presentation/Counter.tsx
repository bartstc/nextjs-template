import { useState } from "react";
import { useIntl } from "react-intl";

interface IProps {
  startFrom?: number;
}

const Counter = ({ startFrom = 0 }: IProps) => {
  const { formatMessage } = useIntl();
  const [count, setCount] = useState(startFrom);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      {formatMessage(
        { id: "count", defaultMessage: "count is {count}" },
        {
          count,
        }
      )}
    </button>
  );
};

export { Counter };
