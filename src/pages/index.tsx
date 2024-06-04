import * as React from "react";
import Link from "next/link";
import MATLogo from "../public/Images/MATLogo.png";


function HomePage() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col justify-center px-16 py-4 w-full text-base leading-6 bg-white border-0 border-solid border-sky-950 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + '/MATLogo.png'} 
            alt="Logo"
            className="shrink-0 self-stretch my-auto aspect-[2.33] w-[63px]"
          />
          <div className="flex gap-5 justify-between self-stretch my-auto text-sky-950">
            <div>Play Game</div>
            <a href="/about" className="hover:text-sky-700">About</a>
            <div>How to Play</div>
            <div className="flex gap-1 justify-center whitespace-nowrap">
              <div>Contact</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/664b49a236e4eed7339595b45768ed588906d63ba9d8690e901d53ec9b0ace63?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                className="shrink-0 w-6 aspect-square"
              />
            </div>
          </div>
          <div className="justify-center self-stretch px-7 py-2 text-white whitespace-nowrap border border-solid bg-sky-950 border-sky-950 rounded-[500px] max-md:px-5">
            Login
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto leading-[150%] max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl font-bold leading-[67px] text-sky-950 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Promote Gender Bias Awareness
                </div>
                <div className="mt-6 text-lg text-sky-950 max-md:max-w-full">
                  Play the Memory Association Test
                </div>
                <div className="flex gap-4 mt-10 text-base max-md:flex-wrap">
                  <div className="flex-1 justify-center p-3 bg-white rounded-lg border border-solid border-sky-950 text-neutral-600">
                    Enter your name
                  </div>
                  <div className="justify-center px-8 py-3 text-white border border-solid bg-sky-950 border-sky-950 rounded-[500px] max-md:px-5">
                    Start Game
                  </div>
                </div>
                <div className="mt-4 text-xs text-sky-950 max-md:max-w-full">
                  Challenge your gender biases
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/189b2c4a7d2d20739d3ce366596a4a34b53ebcad794affd3c08089ade4c5ffe1?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/189b2c4a7d2d20739d3ce366596a4a34b53ebcad794affd3c08089ade4c5ffe1?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/189b2c4a7d2d20739d3ce366596a4a34b53ebcad794affd3c08089ade4c5ffe1?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/189b2c4a7d2d20739d3ce366596a4a34b53ebcad794affd3c08089ade4c5ffe1?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/189b2c4a7d2d20739d3ce366596a4a34b53ebcad794affd3c08089ade4c5ffe1?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/189b2c4a7d2d20739d3ce366596a4a34b53ebcad794affd3c08089ade4c5ffe1?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/189b2c4a7d2d20739d3ce366596a4a34b53ebcad794affd3c08089ade4c5ffe1?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/189b2c4a7d2d20739d3ce366596a4a34b53ebcad794affd3c08089ade4c5ffe1?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-base leading-6 text-white max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e421067f58b4c075457c1a119f5bbec7a4c4375c97e3fd2ebc05fbc8f43318af?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                  className="self-center w-12 aspect-square"
                />
                <div className="mt-6 text-3xl font-bold leading-10 text-center">
                  Memory Game
                </div>
                <div className="mt-6 text-center">
                  Play an engaging and interactive memory game
                </div>
                <div className="flex gap-5 justify-between items-start self-center pt-4 mt-6">
                  <div className="justify-center px-8 py-3 border border-white border-solid rounded-[500px] max-md:px-5">
                    Start Game
                  </div>
                  <div className="flex gap-2 justify-center mt-3">
                    <div className="underline">Learn More</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/98d349ecca13877bd628de8cf6e0b14b6240ee4dde60b524527391ea5f6eaf90?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                      className="shrink-0 w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base text-white max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c9cb8b5f9680554715c33fbf723423e2c1eb9b670abd91937822c3922a159ff?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                  className="self-center w-12 aspect-square"
                />
                <div className="mt-6 text-3xl font-bold leading-10 text-center">
                  Promote Gender Bias Awareness
                </div>
                <div className="mt-6 leading-6 text-center">
                  Reflect on unconscious associations between gender and
                  attributes
                </div>
                <div className="flex gap-5 justify-between items-start self-center pt-4 mt-6 leading-[150%]">
                  <div className="justify-center px-8 py-3 border border-white border-solid rounded-[500px] max-md:px-5">
                    Play Now
                  </div>
                  <div className="flex gap-2 justify-center mt-3">
                    <div className="underline">About Gender Bias</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9e43bb4b047257e048ca77df8d46afe7b6e796faabeb14bf2354f5442914773?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                      className="shrink-0 w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-base text-white max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5d0c7a421a51aae2901454c4773e20799b3350624461774fbf70417fabd1fb?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                  className="self-center w-12 aspect-square"
                />
                <div className="mt-6 text-3xl font-bold leading-10 text-center">
                  Join the Movement
                </div>
                <div className="mt-6 leading-6 text-center">
                  Help spread awareness and create a more inclusive environment
                </div>
                <div className="flex gap-5 justify-between items-start self-center pt-4 mt-6 leading-[150%]">
                  <div className="justify-center px-8 py-3 border border-white border-solid rounded-[500px] max-md:px-5">
                    Get Involved
                  </div>
                  <div className="flex gap-2 justify-center mt-3">
                    <div className="underline">Contact Us</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e857a28be58f26fc03a5de3c73d414ab1cdf066e4ae404b1d4083b8f9bb9379e?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                      className="shrink-0 w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start px-16 py-20 mt-12 w-full bg-sky-950 bg-opacity-50 leading-[150%] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="mt-8 text-5xl font-bold text-white leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          Play the Memory Game
        </div>
        <div className="mt-6 text-lg text-white max-md:max-w-full">
          Test your memory and challenge gender biases
        </div>
        <div className="flex gap-4 mt-8 text-base max-md:flex-wrap">
          <div className="flex-1 justify-center p-3 bg-white rounded-lg border border-solid border-sky-950 text-neutral-600">
            Enter your email
          </div>
          <div className="justify-center px-8 py-3 text-white border border-solid bg-sky-950 border-sky-950 rounded-[500px] max-md:px-5">
            Play Now
          </div>
        </div>
        <div className="mt-4 mb-2.5 text-xs text-white max-md:max-w-full">
          By playing this game you're confirming that you agree with our Terms
          and Conditions.
        </div>
      </div>
      <div className="flex flex-col px-16 py-20 mt-24 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="pb-2 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-base leading-6 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/486da21a624178181a90dfb88db80ec26cf2f3d34284afbf5fc6123107922eb0?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                  className="aspect-[2.33] w-[63px]"
                />
                <div className="mt-6 text-sky-950 max-md:max-w-full">
                  Gender Bias Memory Game
                </div>
                <div className="flex gap-4 mt-6 max-md:flex-wrap">
                  <div className="flex-1 justify-center p-3 bg-white rounded-lg border border-solid border-sky-950 text-neutral-600">
                    Enter your email
                  </div>
                  <div className="justify-center px-8 py-3 border border-solid border-sky-950 rounded-[500px] text-sky-950 max-md:px-5">
                    Play Now
                  </div>
                </div>
                <div className="mt-4 text-xs text-sky-950 max-md:max-w-full">
                  About Gender Bias Memory Game
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col pb-2 text-sm leading-5 text-sky-950 max-md:mt-10">
                      <div className="text-base font-semibold">Explore</div>
                      <div className="mt-6">How to Play</div>
                      <div className="mt-4">Game Rules</div>
                      <div className="mt-4">Leaderboard</div>
                      <div className="mt-4">FAQs</div>
                      <div className="mt-4">Contact Us</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col pb-2 text-sm leading-5 text-sky-950 max-md:mt-10">
                      <div className="text-base font-semibold">Follow Us</div>
                      <div className="mt-6">Facebook</div>
                      <div className="mt-4">Instagram</div>
                      <div className="mt-4">YouTube</div>
                      <div className="mt-4">LinkedIn</div>
                      <div className="mt-4">Twitter</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm leading-5 text-sky-950 max-md:mt-10">
                      <div className="text-base font-semibold">Follow Us</div>
                      <div className="flex gap-3 py-2 mt-4 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/85784e87292ae46fe895afe4ad0817870d7f8a3032dd5d1b65002a78c6aca15b?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>Facebook</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d3cbae24bf5832f0029e27bc3fcbba72fc6f49b5f1d8fae54d9a3241d7d0681?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>Instagram</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/882ade740d006c853ec7f7f017c06ccafca9116d9442243e45bed3110e635df0?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>X</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7556a6259af80ff25f18b8f6ec3452d24e06f5a1b7c07cc6af3d1e3196cdb2ba?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>LinkedIn</div>
                      </div>
                      <div className="flex gap-3 py-2 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bd782612781ef3722026c44895f24ffdeaddd207ff77f7ef15f2920e3c6db8f?apiKey=05441c40b3cb4dc4a2e07b16a8c29776&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div>Youtube</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-20 h-px bg-sky-950 max-md:mt-10 max-md:max-w-full" />
        <div className="flex gap-5 justify-between mt-8 w-full text-sm leading-5 text-sky-950 max-md:flex-wrap max-md:max-w-full">
          <div>© 2022 Gender Bias Memory Game. All rights reserved.</div>
          <div className="flex gap-5 justify-between font-medium">
            <div className="underline">Privacy Policy</div>
            <div className="underline">Terms of Service</div>
            <div className="underline">Cookies Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
