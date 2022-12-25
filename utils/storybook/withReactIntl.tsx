import { IntlProvider } from "react-intl";

// eslint-disable-next-line react/display-name
export const withReactIntl = () => (story: any) => {
  return (
    <IntlProvider locale="en" onError={() => {}}>
      {story()}
    </IntlProvider>
  );
};
