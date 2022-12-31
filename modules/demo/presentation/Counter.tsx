import { useState } from "react";
import { useIntl } from "react-intl";

import { Button } from "@chakra-ui/react";

interface IProps {
  startFrom?: number;
}

const Counter = ({ startFrom = 0 }: IProps) => {
  const { formatMessage } = useIntl();
  const [count, setCount] = useState(startFrom);

  return (
    <Button onClick={() => setCount((count) => count + 1)}>
      {formatMessage(
        { id: "count", defaultMessage: "count is {count}" },
        {
          count,
        }
      )}
    </Button>
  );
};

export { Counter };
