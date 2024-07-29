"use client"; // Next.js의 클라이언트 측 컴포넌트라는 것을 명시합니다.

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; // Heroicons 라이브러리에서 돋보기 아이콘을 가져옵니다.
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // 이 함수는 내용을 래핑 handleSearch하고 사용자가 입력을 멈춘 후 특정 시간(300ms)이 지난 후에만 코드를 실행
  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      {/* 검색 입력 필드와 돋보기 아이콘을 감싸는 컨테이너입니다.
          flex 속성은 내부 요소의 배치와 크기를 조절합니다. */}
      <label htmlFor="search" className="sr-only">
        Search
        {/* 접근성을 위한 레이블로, 화면 리더기에서만 읽힙니다. */}
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
          // 입력 값이 변경될 때마다 handleSearch 함수를 호출합니다.
        }}
        defaultValue={searchParams.get("query")?.toString()} // URL과 입력을 동기화 상태로 유지
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      {/* 돋보기 아이콘을 렌더링합니다.
          absolute 위치로 input 필드 내 왼쪽에 배치됩니다.
          peer-focus 클래스는 input이 포커스될 때 아이콘 색상을 변경합니다. */}
    </div>
  );
}
