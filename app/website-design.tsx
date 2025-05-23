'use client'

import Image from "next/image"

const WebsiteDesign = () => {
    return (   
    <div className="text-white">
 <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
              Shopify Store Design <br /> that works
      </div>
      <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
      Creating, designing and developing websites that work for your business.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">

          {/* sample 1-3 */}
          <div className="grid gap-4">
              <div>
                <Image
                  width={500}
                  height={500}
                  priority
                  src="/assets/sample3.jpg" 
                  alt=""
                  className="h-72 object-cover object-top max-w-full rounded-lg" />
              </div>
              <div>
                <Image
                  width={500}
                  height={500}
                  priority
                  src="/assets/sample4.jpg" 
                  alt=""
                  className="h-72 object-cover object-top max-w-full rounded-lg" />
              </div>
              <div>
                <Image
                  width={500}
                  height={500}
                  priority
                  src="/assets/sample5.jpg" 
                  alt=""
                  className="h-72 object-cover object-top max-w-full rounded-lg" />
              </div>
          </div>

           {/* sample 4-2 */}
          <div className="grid gap-4">
              <div>
                <Image
                  width={500}
                  height={500}
                  priority
                  className="h-72 object-cover object-top max-w-full rounded-lg" 
                  src="/assets/sample6.jpg" alt=""/>
              </div>
              <div>
                  <Image
                  width={500}
                  height={500}
                  priority
                  className="h-72 object-cover object-top max-w-full rounded-lg" 
                  src="/assets/sample7.jpg" alt=""/>
              </div>
              <div>
                  <Image
                  width={500}
                  height={500}
                  priority
                  className="h-72 object-cover object-top max-w-full rounded-lg" 
                  src="/assets/sample8.jpg" alt=""/>
              </div>
          </div>

          <div className="grid gap-4">
              <div>
                <Image
                  width={500}
                  height={500}
                  priority
                  className="h-72 object-cover object-top max-w-full rounded-lg"
                  src="/assets/sample1.jpg" 
                  alt=""/>
              </div>
              <div>
                  <Image
                  width={500}
                  height={500}
                  priority
                  className="h-72 object-cover object-top max-w-full rounded-lg" 
                  src="/assets/sample10.png" alt=""/>
              </div>
              <div>
                  <Image
                  width={500}
                  height={500}
                  priority
                  className="h-72 object-cover object-top max-w-full rounded-lg" 
                  src="/assets/sample7.jpg" alt=""/>
              </div>
          </div>
        </div>
    </div> );
}
 
export default WebsiteDesign;