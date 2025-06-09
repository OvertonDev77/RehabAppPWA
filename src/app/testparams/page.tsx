"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Test() {
  const router = useRouter();

  // This function will update the query string to ?hi=woah
  function changeQueryString() {
    // If you want to keep the current path:
    router.replace("?hi=woah", { scroll: false });
    // Or, for a full path (relative to the domain root):
    // router.replace("/testparams?hi=woah", { scroll: false });
  }

  const params = useSearchParams();

  console.log(params.get("hi"));

  return (
    <>
      <h1>Hello</h1>
      <button onClick={changeQueryString}>Change params</button>
    </>
  );
}

/* 
Example: 

'use client'
 
export default function ExampleClientComponent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
 
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
 
  return (
    <>
      <p>Sort By</p>
 
    
      <button
        onClick={() => {
          // <pathname>?sort=asc
          router.push(pathname + '?' + createQueryString('sort', 'asc'))
        }}
      >
        ASC
      </button>
 
    
      <Link
        href={
          // <pathname>?sort=desc
          pathname + '?' + createQueryString('sort', 'desc')
        }
      >
        DESC
      </Link>
    </>
  )
}
*/
