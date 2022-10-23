import { useRouter } from "next/router";

export default function ConfirmBar({title}: {title:string}) {
  const router = useRouter();
  return (
    <div className="flex text-white w-full justify-between p-5 items-center">
      <div className="w-4 h-8"></div>
      <h2>{title}</h2>
      <div className="flex" onClick={() => router.back()}>
        <img
          className="h-5 cursor-pointer"
          src="/component/icon-cross.svg"
        />
      </div>
    </div>
  );
}
