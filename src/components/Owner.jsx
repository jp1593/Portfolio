import OWN from "../assets/OWN.jpeg";
import "./Owner.css";

export default function Owner() {
  return (
    <section class="p-20">
      <div class="container mx-auto">
        <div class="flex justify-center">
          <div class="flex flex-col gap-5 text-center">
            <img class="ownimage mx-auto" src={OWN} />
            <div class="flex flex-col gap-3">
              <h1 class="text-white text-5xl">Juan Pablo Estrada Lucero</h1>
              <p class="text-gray-400 text-2xl">
                Full Stack Developer / Backend developer (Python, MySql, Java
                Script, MySql)
              </p>
              <button class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <svg
                  class="w-5 h-5 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="w-5"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </button>
              <p class="text-white text-xl mt-10">asdfasfasfasdfasdf</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
