<template>
  <div class="relative space-y-6">
    <div
      class="flex flex-col gap-4 z-[10] relative sm:bg-[#D6D3FF] m-8 rounded-[32px]"
    >
      <Header />

      <div
        class="flex flex-col gap-4 items-center justify-center max-w-3xl mx-auto"
      >
        <h1
          class="text-3xl md:text-4xl font-semibold text-[#111111] lg:text-6xl text-center leading-10 lg:leading-[74px]"
        >
          Streamlining
          <span class="text-[#0047BA]">government communication</span> with
          <span class="text-[#0047BA]">twice</span> the
          <span class="text-[#0047BA]">speed</span> and
          <span class="text-[#0047BA]">security</span>
        </h1>

        <p class="text-lg font-normal leading-6 text-center">
          Enhancing governance and service delivery through digital
          transformation for sustainable progress through a secure and fast
          communication system.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-3 items-center justify-center"
        >
          <button class="btn-primary btn-primary-gradient">
            Go Paperless
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.879 9.25L9.856 5.227L10.9165 4.1665L16.75 10L10.9165 15.8335L9.856 14.773L13.879 10.75H4.75V9.25H13.879Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <button class="btn-outline">
            Learn More
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.879 9.25L9.856 5.227L10.9165 4.1665L16.75 10L10.9165 15.8335L9.856 14.773L13.879 10.75H4.75V9.25H13.879Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- <div
        class="h-[540px] max-w-[1200px] bg-top w-full bg-no-repeat bg-contain relative mx-auto left-0 right-0"
        style="background-image: url('')"
      ></div> -->

      <img
        src="/Group 1171274937.png"
        class="w-[700px] mx-auto relative bottom-[-200px] -mt-[240px] z-[1000]"
      />

      <div
        class="hidden sm:block bg-contain bg-no-repeat size-[300px] absolute bottom-0"
        style="background-image: url('/img/v1.png')"
      ></div>
      <div
        class="hidden sm:block bg-contain bg-no-repeat size-[300px] absolute bottom-0 right-0"
        style="background-image: url('/img/v2.png')"
      ></div>
    </div>

    <div class="h-[140px]"></div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mx-8">
      <div class="max-w-[598px] left-0">
        <p class="text-[16px] leading-5 font-normal text-[#111111]">
          Cabinet Memo ensures that you can securely send and receive data
          within the government ecosystem through a perfectly blended mixture of
          real-time and automated communication alongside a modern and secure
          system architecture
        </p>
        <button class="btn-primary btn-primary-gradient mt-4">
          Get Started
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.879 9.25L9.856 5.227L10.9165 4.1665L16.75 10L10.9165 15.8335L9.856 14.773L13.879 10.75H4.75V9.25H13.879Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <div>
        <div class="flex sm:mt-5 md:mt-0">
          <img src="public/Rectangle 5702.svg" />
          <p class="font-medium text-[#7B13FD] ml-2 text-[16px]">
            What the platform can do
          </p>
        </div>
        <p class="font-semibold text-2xl text-black">
          Enhancing the way inter-departmental communication is done in the
          government
        </p>
      </div>
    </div>
    <!-- Grid containers -->
    <div
      class="lg:flex grid md:grid-cols-2 md:items-center gap-[1rem] mx-8 mt-[32px]"
    >
      <!-- NO. 1 -->
      <DetailsCard
        :img="'/collaboration-tools.png'"
        img_class="-ml-[20px]"
        :bg_color="' #EBF3FE'"
        :shadow_color="'rgba(235, 243, 254, 0.8)'"
        :heading="'Collaborations tools'"
        :card_title="'Seamless interagency collaboration in real-time to improve efficiency and productivity. Drafting, version control, commenting, and simultaneous editing within the defined Cabinet Memo workflow.'"
      />

      <!-- NO. 2 -->
      <DetailsCard
        :img="'/Digital-signatures.png'"
        img_class="-mr-[20px]"
        :bg_color="'#EBEFFF'"
        :shadow_color="'rgba(235, 239, 255, 0.8)'"
        :heading="'Digital signatures'"
        :card_title="'Electronic identity verification to ensure document integrity and preventing tampering. Digital signing is integrated within the workflows to reducing reliance on paper.'"
      />
      <!-- NO. 3 -->
      <DetailsCard
        :img="'notifications.png'"
        img_class="-mr-[20px] -ml-[20px]"
        :bg_color="' #EBF3FE'"
        :shadow_color="'rgba(235, 243, 254, 0.8)'"
        :heading="'Notifications'"
        :card_title="'Electronic identity verification to ensure document integrity and preventing tampering. Digital signing is integrated within the workflows to reducing reliance on paper.'"
      />
      <!-- NO. 4 -->
      <DetailsCard
        :img="'/automatic-workflows.png'"
        img_class="-mr-[20px]"
        :bg_color="' #F6EEFF'"
        :shadow_color="'rgba(246, 238, 255, 0.8)'"
        :heading="'Automated Workflows'"
        :card_title="'Replacing manual processes with automated workflows to save time. Tasks and process between team members, real-time tracking to improve efficiency and accountability.'"
      />
    </div>
    <!-- Lower section -->
    <div>
      <div class="mt-[100px]">
        <p
          class="font-medium text-[#0064E7] gap-2 text-[16px] flex text-center justify-center"
        >
          <img src="public/Rectangle 5720.svg" />
          Q & A
        </p>
        <p class="font-semibold text-[24px] text-center">
          Transparent service delivery through answering your burning questions
        </p>
      </div>
      <!-- No. 1 -->
      <div class=" mt-[100px] border border-[#E1E4EA] rounded-[10px] w-[85%] mx-auto text-sm font-medium cursor-pointer">
    <button
      class="question-btn flex w-full gap-x-5 justify-between rounded-lg text-left text-sm font-medium text-[#0E121B] focus:outline-none p-3"
      @click="toggleAnswer('dropdown1')"
    >  
      <span class="flex gap-2">
        <img src="public/fingerprint.svg" >
        How is verification done?</span>
      <svg
        :class="{'rotate-180': isOpen, 'rotate-0': !isOpen}"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        class="mt-1.5 md:mt-0 flex-shrink-0 transform h-5 w-5 text-[#5B5675]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
        ></path>
      </svg>
    </button>
    <div
      v-show="isOpen['dropdown1']"
      class="answer p-3 text-sm font-medium text-[#38393b]"
      id="answer-1"
    >
      Verification is completed through the eCitizen verification system, ensuring secure and authenticated access.
    </div>
    </div>

    <!-- No. 2 -->
    <div class=" mt-4 border border-[#E1E4EA] rounded-[10px] w-[85%] mx-auto text-sm font-medium cursor-pointer">
    <button
      class="question-btn flex w-full gap-x-5 justify-between rounded-lg text-left text-sm font-medium text-[#0E121B] focus:outline-none p-3"
      @click="toggleAnswer('dropdown2')"
    >  
      <span class="flex gap-2">
        <img src="public/quill-pen-fill.svg" >
        How can I track Signatories actions on my document?</span>
      <svg
        :class="{'rotate-180': isOpen, 'rotate-0': !isOpen}"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        class="mt-1.5 md:mt-0 flex-shrink-0 transform h-5 w-5 text-[#5B5675]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
        ></path>
      </svg>
    </button>
    <div
      v-show="isOpen['dropdown2']"
      class="answer p-3 text-sm font-medium text-[#38393b]"
      id="answer-2"
    >
    You can monitor signatures through both the audit log and document information section, which show real-time signing status.    </div>
    </div>

    <!-- No. 3 -->
    <div class=" mt-4 border border-[#E1E4EA] rounded-[10px] w-[85%] mx-auto text-sm font-medium cursor-pointer">
    <button
      class="question-btn flex w-full gap-x-5 justify-between rounded-lg text-left text-sm font-medium text-[#0E121B] focus:outline-none p-3"
      @click="toggleAnswer('dropdown3')"
    >  
      <span class="flex gap-2">
        <img src="public/bell-fill.svg" >
        How will I know when I receive a signature request?</span>
      <svg
        :class="{'rotate-180': isOpen, 'rotate-0': !isOpen}"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        class="mt-1.5 md:mt-0 flex-shrink-0 transform h-5 w-5 text-[#5B5675]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
        ></path>
      </svg>
    </button>
    <div
      v-show="isOpen['dropdown3']"
      class="answer p-3 text-sm font-medium text-[#38393b]"
      id="answer-3"
    >
    You'll receive account notifications whenever a new signature request arrives for your attention.</div>
    </div>

    <!-- No. 4 -->
    <div class=" mt-4 border border-[#E1E4EA] rounded-[10px] w-[85%] mx-auto text-sm font-medium cursor-pointer">
    <button
      class="question-btn flex w-full gap-x-5 justify-between rounded-lg text-left text-sm font-medium text-[#0E121B] focus:outline-none p-3"
      @click="toggleAnswer('dropdown4')"
    >  
      <span class="flex gap-2">
        <img src="public/quill-pen-fill.svg" >
        How do I initiate a new signature request</span>
      <svg
        :class="{'rotate-180': isOpen, 'rotate-0': !isOpen}"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        class="mt-1.5 md:mt-0 flex-shrink-0 transform h-5 w-5 text-[#5B5675]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
        ></path>
      </svg>
    </button>
    <div
      v-show="isOpen['dropdown4']"
      class="answer p-3 text-sm font-medium text-[#38393b]"
      id="answer-4"
    >
    Navigate to the upload tab, upload your document, and add the relevant information. Lastly, specify signatories and send your request.
    </div>
    </div>

    <!-- No. 5 -->
    <div class=" mt-4 border border-[#E1E4EA] rounded-[10px] w-[85%] mx-auto text-sm font-medium cursor-pointer">
    <button
      class="question-btn flex w-full gap-x-5 justify-between rounded-lg text-left text-sm font-medium text-[#0E121B] focus:outline-none p-3"
      @click="toggleAnswer('dropdown5')"
    >  
      <span class="flex gap-2">
        <img src="public/calendar-schedule-fill.svg" >
        Is there a way to view my past signature request</span>
      <svg
        :class="{'rotate-180': isOpen, 'rotate-0': !isOpen}"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        class="mt-1.5 md:mt-0 flex-shrink-0 transform h-5 w-5 text-[#5B5675]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
        ></path>
      </svg>
    </button>
    <div
      v-show="isOpen['dropdown5']"
      class="answer p-3 text-sm font-medium text-[#38393b]"
      id="answer-5"
    >
    Yes, the history tab provides a comprehensive record of all documents you've signed, making it easy to track and reference previous signatures  </div>
    </div>

    <!-- No. 6 -->
    <div class=" mt-4 border border-[#E1E4EA] rounded-[10px] w-[85%] mx-auto text-sm font-medium cursor-pointer">
    <button
      class="question-btn flex w-full gap-x-5 justify-between rounded-lg text-left text-sm font-medium text-[#0E121B] focus:outline-none p-3"
      @click="toggleAnswer('dropdown6')"
    >  
      <span class="flex gap-2">
        <img src="/Vector.svg" />
        What file formats are supported for document uploads?</span>
      <svg
        :class="{'rotate-180': isOpen, 'rotate-0': !isOpen}"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        class="mt-1.5 md:mt-0 flex-shrink-0 transform h-5 w-5 text-[#5B5675]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
        ></path>
      </svg>
    </button>
    <div
      v-show="isOpen['dropdown6']"
      class="answer p-3 text-sm font-medium text-[#38393b]"
      id="answer-6"
    >
    PDF, Word documents (.docx), and image files (JPG, PNG) are supported formats for signature requests.  </div>
    </div>

    <!-- No. 7 -->
    <div class=" mt-4 border border-[#E1E4EA] rounded-[10px] w-[85%] mx-auto text-sm font-medium cursor-pointer">
    <button
      class="question-btn flex w-full gap-x-5 justify-between rounded-lg text-left text-sm font-medium text-[#0E121B] focus:outline-none p-3"
      @click="toggleAnswer('dropdown7')"
    >  
      <span class="flex gap-2">
        <img src="public/user.svg" >
        How can I track signatories' action on my document?</span>
      <svg
        :class="{'rotate-180': isOpen, 'rotate-0': !isOpen}"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        class="mt-1.5 md:mt-0 flex-shrink-0 transform h-5 w-5 text-[#5B5675]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
        ></path>
      </svg>
    </button>
    <div
      v-show="isOpen['dropdown7']"
      class="answer p-3 text-sm font-medium text-[#38393b]"
      id="answer-7"
    >
    Yes, you can add multiple signatories to a single document. Each signatory will receive their own notification and can sign in their designated order.    </div>
    </div>

    <!-- No. 8 -->
    <div class=" mt-4 border border-[#E1E4EA] rounded-[10px] w-[85%] mx-auto text-sm font-medium cursor-pointer">
    <button
      class="question-btn flex w-full gap-x-5 justify-between rounded-lg text-left text-sm font-medium text-[#0E121B] focus:outline-none p-3"
      @click="toggleAnswer('dropdown8')"
    >  
      <span class="flex gap-2">
        <img src="public/scales-line.svg" >
        Is my digital signature legally binding?</span>
      <svg
        :class="{'rotate-180': isOpen, 'rotate-0': !isOpen}"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        class="mt-1.5 md:mt-0 flex-shrink-0 transform h-5 w-5 text-[#5B5675]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
        ></path>
      </svg>
    </button>
    <div
      v-show="isOpen['dropdown8']"
      class="answer p-3 text-sm font-medium text-[#38393b]"
      id="answer-8"
    >
    Yes, digital signatures processed through our platform are legally binding in accordance with electronic signature laws and regulations.  </div>
    </div>

    <!-- No. 9 -->
    <div class=" mt-4 border border-[#E1E4EA] rounded-[10px] w-[85%] mx-auto text-sm font-medium cursor-pointer">
    <button
      class="question-btn flex w-full gap-x-5 justify-between rounded-lg text-left text-sm font-medium text-[#0E121B] focus:outline-none p-3"
      @click="toggleAnswer('dropdown9')"
    >  
      <span class="flex gap-2">
        <img src="public/phone.svg" >
        Can I sign documents on mobile devices?</span>
      <svg
        :class="{'rotate-180': isOpen, 'rotate-0': !isOpen}"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        class="mt-1.5 md:mt-0 flex-shrink-0 transform h-5 w-5 text-[#5B5675]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
        ></path>
      </svg>
    </button>
    <div
      v-show="isOpen['dropdown9']"
      class="answer p-3 text-sm font-medium text-[#38393b]"
      id="answer-9"
    >
    Yes, our platform is mobile-responsive. You can sign documents on any smartphone or tablet with an internet connection.
  </div>
    </div>
    </div>

    <!-- footer -->
    <div
      class="bg-[#0C1431] flex flex-col items-center justify-center h-auto md:mt-24 mt-6 relative sm/md:w-full"
    >
      <div
        class="flex items-center justify-center bg-cover bg-bottom sm:bg-center bg-no-repeat py-16 min-h-[500px] sm:min-h-[624px] w-[100%]"
        style="background-image: url('/withgradient.png')"
      >
      <div class="max-w-[769px] mx-auto md/lg:top-[500px] top-44">
        <h1
          class="text-center text-3xl md:text-4xl font-semibold text-white lg:text-6xl leading-10 lg:leading-[74px]"
        >
          Make communication<br />
          <span
            class="bg-gradient-to-b from-[#D6B6FE] to-[#6F11E4] text-transparent bg-clip-text"
            >safe</span
          >
          and
          <span
            class="bg-gradient-to-b from-[#D6B6FE] to-[#6F11E4] text-transparent bg-clip-text"
            >seamless</span
          >
          again
        </h1>
        <p class="text-white font-normal text-xl mt-[18px]">
          Ensure your communications reach their intended target, unaltered,
          uninterrupted and in one piece - safe, sound and seamlessly with
          Cabinet Memo
        </p>
        <button class="btn-outline mx-auto mt-[18px]">
          Get started
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.879 9.25L9.856 5.227L10.9165 4.1665L16.75 10L10.9165 15.8335L9.856 14.773L13.879 10.75H4.75V9.25H13.879Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
      <div
        class="md:mt-[90px] top-0 w-[85%] h-[136px] grid text-white font-normal text-[16px] font-[inter,sans-serif] relative"
      >
        <div class="grid">
          <img src="public/image 64.svg" />
          <p class="mt-[30px] text-white font-normal text-[16px]">
            Giving Kenyans easy access to automated<br />
            services.
          </p>
        </div>
        <div class="md:absolute right-0">
          <p>Get the app</p>
          <img class="mt-4" src="public/Mobile app store badge.svg" />
          <img class="mt-4" src="public/Mobile app store badge (1).svg" />
        </div>
      </div>
      <div
        class="mb-12 md:mt-[64px] mt-40 w-[85%] border-t h-[56px] flex flex-col text-white font-normal text-[16px] font-[inter,sans-serif] relative"
      >
        <p class="md:absolute mt-4 bottom-0">
          © 2023 eCitizen. All rights reserved.
        </p>
        <div class="md:absolute bottom-0 right-0 flex mt-8 gap-6">
          <img src="public/x.svg" />
          <img src="public/linkedin.svg" />
          <img src="public/f.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import DetailsCard from "@/components/DetailsCard.vue";
const isOpen = ref({
  dropdown1: false,
  dropdown2: false,
  dropdown3: false,
  dropdown4: false,
  dropdown5: false,
  dropdown6: false,
  dropdown7: false,
  dropdown8: false,
  dropdown9: false,
});
function toggleAnswer(dropdown) {
  isOpen.value[dropdown] = !isOpen.value[dropdown];
}
</script>
<style scoped>
.rotate-0 {
  transform: rotate(0deg);
}
.rotate-180 {
  transform: rotate(180deg);
}
</style>
