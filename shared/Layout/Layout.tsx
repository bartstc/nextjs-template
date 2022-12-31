import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {children}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 25px 50px;
        }

        a {
          color: #22bad9;
        }

        p {
          font-size: 14px;
          line-height: 24px;
        }

        article {
          margin: 0 auto;
          max-width: 650px;
        }
      `}</style>
    </main>
  );
};
