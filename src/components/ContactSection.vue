<template>
    <section class="text-white mt-20" id="contact">
        <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">Let’s Connect</h2>
        <div class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
            <div>
                <p class="text-[#adb7be]">
                    Feel free to reach out, whether it’s to discuss ideas, collaborate on exciting projects, or just to
                    share knowledge. I’m always open to connecting with others and believe that great ideas are born
                    through collaboration and communication.

                    Whether you want to talk about a project, ask questions, or simply exchange ideas about technology,
                    development, or anything else, I’m here. Let’s build something amazing together!
                </p>
                <div class="col-lg-4 col-md-4 mb-lg-0 mt-5">
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                            style="background: #111a3e; width: 50px;height: 46px; display: flex;justify-content: center; border-radius: 50%;
                        overflow: hidden;border: 1px solid#111a3e;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
                            <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="new-post" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>Email</h4>
                            <p>pedro.almeidasousah@hotmail.com</p>
                        </div>
                    </div>
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                            style="background: #111a3e; width: 50px;height: 46px; display: flex;justify-content: center; border-radius: 50%;
                        overflow: hidden;border: 1px solid#111a3e;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="phone" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>Phone</h4>
                            <p>+55 (19) 9 99892-4002</p>
                        </div>
                    </div>
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                            style="background: #111a3e; width: 50px;height: 46px; display: flex;justify-content: center; border-radius: 50%;
                        overflow: hidden;border: 1px solid#111a3e;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin"
                                class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>LinkedIn</h4>
                            <p>www.linkedin.com/in/pedro-henrique-sousa-almeida-269406211/</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style="background: #111a3e; width: 100%;height: 100%; border-radius: 20px;
            overflow: hidden;border: 1px solid #111a3e;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
                <form action="https://formspree.io/f/xyzzdjro" method="POST"
                    class="flex flex-col space-y-6 p-4 bg-[#111a3e] rounded-lg shadow-lg border border-[#1f1641]"
                    data-aos="fade-up">
                    <div>
                        <label for="email" class="block text-white text-sm font-medium mb-2">
                            Your Email:
                        </label>
                        <input type="email" id="email" name="email" required
                            class="w-full bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5"
                            placeholder="email@example.com" />
                    </div>

                    <div>
                        <label for="message" class="block text-white text-sm font-medium mb-2">
                            Your Message:
                        </label>
                        <textarea id="message" name="message" required
                            class="w-full bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5"
                            placeholder="Write your message here..."></textarea>
                    </div>

                    <button type="submit"
                        class="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-all duration-300">
                        Send
                    </button>
                </form>
            </div>
            <div class="bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 
        -translate-1/2
        "></div>
        </div>
    </section>
</template>
<script>

</script>