<template>
    <div class="relative">
    <div
      class="flex flex-col gap-8 z-[10] relative bg-[#D6D3FF] m-8 rounded-[32px]"
    >
          <Header />
      
          <div
        class="flex flex-col gap-4 items-center justify-center max-w-3xl mx-auto pb-[10rem]"
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
          
          <div class="h-[30px]"></div>
      
      <div
        class="h-[720px] bg-no-repeat bg-contain w-full absolute top-[400px] mx-auto left-0 right-0 bg-center"
        style="background-image: url('/Group 1171274937.png')"
      ></div>
          
      <div
        class="bg-contain bg-no-repeat size-[300px] absolute bottom-0"
        style="background-image: url('/img/v1.png')"
      ></div>
      <div
        class="bg-contain bg-no-repeat size-[300px] absolute bottom-0 right-0"
        style="background-image: url('/img/v2.png')"
      ></div>
        </div>
        
    <div class="lg:flex sm/md:grid mt-[500px] mx-8">
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
        <div class="flex">
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
      class="flex flex-col md:flex-row md:items-center gap-[1rem] mx-8 absolute mt-[32px]"
    >
        <!-- NO. 1 -->
        <DetailsCard :img src= "../public/Digital-signatures.png" :bg_color=" '#EBEFFF'" :heading=" 'Digital signatures'" :card_title=" 'Electronic identity verification to ensure document integrity and preventing tampering. Digital signing is integrated within the workflows to reducing reliance on paper.'"/>
        <!-- NO. 2 -->
        <DetailsCard :img src="/Digital-signatures.png" :bg_color="' #EBEFFF'" :heading=" 'Digital signatures'" :card_title=" 'Electronic identity verification to ensure document integrity and preventing tampering. Digital signing is integrated within the workflows to reducing reliance on paper.'"/>
        <!-- NO. 3 -->
        <DetailsCard :img src="/notifications.png" :bg_color="' #EBF3FE'" :heading=" 'Notifications'" :card_title=" 'Electronic identity verification to ensure document integrity and preventing tampering. Digital signing is integrated within the workflows to reducing reliance on paper.'"/>
        <!-- NO. 4 -->
        <DetailsCard :img src="/automatic-workflows.png" :bg_color="' #EBF3FE'" :heading=" 'Automated Workflows'" :card_title=" 'Replacing manual processes with automated workflows to save time. Tasks and process between team members, real-time tracking to improve efficiency and accountability.'"/>
      </div>
      <!-- Lower section -->             
      <div class="mt-[2500px] md:mt-[795px] container">
                <div> 
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
        <div class="mt-[61px] mx-8">
            <!-- N0 1. -->
            <div
            class="border border-[#E1E4EA] content-center justify-center h-[48px] hover:bg-[#D6D3FF] rounded-[10px] mx-25"
          >
            <p
              class="font-medium text-[14px] ml-[13px] flex [text-decoration-skip-ink:none]"
            >
              <img class="ml-4" src="public/Fingerprint.svg" />
                <span class="ml-2">How is verification done?</span>
              <svg
                class="md:absolute md:ml-[85%] my-auto"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z"
                  fill="#99A0AE"
                />
                </svg>
              </p>          
            </div>
            <!-- NO 2. -->
            <div
            class="mt-4 border border-[#E1E4EA] content-center justify-center h-[48px] hover:bg-[#D6D3FF] rounded-[10px] mx-25"
          >
            <p class="font-medium text-[14px] ml-[13px] flex">
              <img class="ml-4" src="public/quill-pen-fill.svg" />
              <span class="ml-2"
                >How can I track signatories' action on my document?</span
              >
              <svg
                class="absolute ml-[85%] my-auto"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z"
                  fill="#99A0AE"
                />
                </svg>
              </p>          
            </div>
          <!-- NO 3. -->
            <div
            class="mt-4 border border-[#E1E4EA] content-center justify-center h-[48px] hover:bg-[#D6D3FF] rounded-[10px] mx-25"
          >
            <p class="font-medium text-[14px] ml-[13px] flex">
              <img class="ml-4" src="public/bell-fill.svg" />
              <span class="ml-2"
                >How can I track signatories' action on my document?</span
              >
              <svg
                class="absolute ml-[85%] my-auto"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z"
                  fill="#99A0AE"
                />
                </svg>
              </p>          
            </div>
            <!-- NO 4. -->
            <div
            class="mt-4 border border-[#E1E4EA] content-center justify-center h-[48px] hover:bg-[#D6D3FF] rounded-[10px] mx-25"
          >
            <p class="font-medium text-[14px] ml-[13px] flex">
              <img class="ml-4" src="public/quill-pen-fill.svg" />
                <span class="ml-2">How do I initiate a new signature request</span>
              <svg
                class="absolute ml-[85%] my-auto"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z"
                  fill="#99A0AE"
                />
                </svg>
              </p>          
            </div>
            <!-- NO 5.  -->
            <div
            class="mt-4 border border-[#E1E4EA] content-center justify-center h-[48px] hover:bg-[#D6D3FF] rounded-[10px] mx-25"
          >
            <p class="font-medium text-[14px] ml-[13px] flex">
              <img class="ml-4" src="public/calendar-schedule-fill.svg" />
              <span class="ml-2"
                >Is there a way to view my past signature request?</span
              >
              <svg
                class="absolute ml-[85%] my-auto"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z"
                  fill="#99A0AE"
                />
                </svg>
              </p>          
            </div>
            <!-- NO 6. -->
            <div
            class="mt-4 border border-[#E1E4EA] content-center justify-center h-[48px] hover:bg-[#D6D3FF] rounded-[10px] mx-25"
          >
            <p class="font-medium text-[14px] ml-[13px] flex">
              <img class="ml-4" src="public/vector.svg" />
              <span class="ml-2"
                >What file formats are supported for document uploads?</span
              >
              <svg
                class="absolute ml-[85%] my-auto"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z"
                  fill="#99A0AE"
                />
                </svg>
              </p>          
            </div>
            <!-- N0 7. -->
            <div
            class="mt-4 border border-[#E1E4EA] content-center justify-center h-[48px] hover:bg-[#D6D3FF] rounded-[10px] mx-25"
          >
            <p class="font-medium text-[14px] ml-[13px] flex">
              <img class="ml-4" src="public/user.svg" />
              <span class="ml-2"
                >How can I track signatories' action on my document?</span
              >
              <svg
                class="absolute ml-[85%] my-auto"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z"
                  fill="#99A0AE"
                />
                </svg>
              </p>          
            </div>
            <!-- NO 8. -->
            <div
            class="mt-4 border border-[#E1E4EA] content-center justify-center h-[48px] hover:bg-[#D6D3FF] rounded-[10px] mx-25"
          >
            <p class="font-medium text-[14px] ml-[13px] flex">
              <img class="ml-4" src="public/scales-line.svg" />
                <span class="ml-2">Is my digital signature legally binding?</span>
              <svg
                class="absolute ml-[85%] my-auto"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z"
                  fill="#99A0AE"
                />
                </svg>
              </p>          
            </div>
            <!-- NO 9. -->
            <div
            class="mt-4 border border-[#E1E4EA] content-center justify-center h-[48px] hover:bg-[#D6D3FF] rounded-[10px] mx-25"
          >
            <p class="font-medium text-[14px] ml-[13px] flex">
              <img class="ml-4" src="public/phone.svg" />
                <span class="ml-2">Can I sign documents on mobile devices?</span>
              <svg
                class="absolute ml-[85%] my-auto"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z"
                  fill="#99A0AE"
                />
                </svg>
              </p>          
          </div>
            </div>
          
        <!-- footer -->
        <div
          class="bg-[#0C1431] flex flex-col items-center justify-center h-auto mb-0"
        >
          <div
            class="bg-contain bg-no-repeat h-[924px] w-[100%]"
            style="background-image: url('/Rectangle 34624163.svg')"
          ></div>
          <div class="text-center max-w-[769px]">
            <h1
              class="text-3xl md:text-4xl font-semibold text-white lg:text-6xl leading-10 lg:leading-[74px]"
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
      </div>
    </div>
  
</template>

<script setup>
import Header from "@/components/Header.vue";
import DetailsCard from "@/components/DetailsCard.vue"



</script>
