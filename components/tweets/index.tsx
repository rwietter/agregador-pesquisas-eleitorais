import { Timeline } from "react-twitter-widgets";

const Tweets: React.FC = () => (
  <>
    <Timeline
      dataSource={{
        sourceType: "profile",
        screenName: "CentralEleicoes",
      }}
    />
    <Timeline
      dataSource={{
        sourceType: "profile",
        screenName: "eixopolitico",
      }}
    />
  </>
);

export default Tweets;
