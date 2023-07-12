import { Html } from "./components/Html.js";

interface AppProps {
  assets?: {
    [key: string]: string;
  };
}

export function App(props: AppProps) {
  const { assets } = props;

  return (
    <Html title="system-panda Dashboard" assets={assets}>
      <div className="bg-slate-500 text-white px-3 py-2">
        <article>
          <p>Hello world</p>
          <p>Is this working?</p>
          <p>I sure hope so</p>
        </article>
      </div>
    </Html>
  );
}
