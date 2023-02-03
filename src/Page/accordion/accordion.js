import React from "react";

const accordion = () => {
  return (
    <div>
      <li class="bg-indigo-500 item">
        {/* -- wrap is important here --> */}
        <input type="checkbox" id="faq1" class="peer appearance-none" />
        <i class="fa-solid fa-chevron-right peer-checked:hidden inline"></i>
        <i class="fa-solid fa-chevron-down peer-checked:inline hidden"></i>
        <label for="faq1" class="py-4 cursor-pointer grow">
          {/* -- note: grow is used to fill all remaining space of the article --> */}
          <p>What is your name?</p>
        </label>
        {/* -- note: checkbox will be triggered even if label is triggered. --> */}
        <div class="peer-checked:block none">
          {/* <!-- note: basis may not work without wrap --> */}
          <p>My name is Sohan Emon</p>
        </div>
      </li>
    </div>
  );
};

export default accordion;
