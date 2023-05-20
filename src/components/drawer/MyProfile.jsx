import { profilePicture01 } from "../../constants/data";

export default function MyProfile() {
  return (
    <>
      <section className="profile-icon  flex justify-center">
        <img
          className="rounded-full w-52 h-52 my-7"
          src={profilePicture01}
          alt="dp"
        />
      </section>
      <section className="name px-[30px] pt-3.5 pb-2.5">
        <span className="block text-[#008069] mb-3.5">Your name</span>
        <span className="block text-[#d1d7db]">Mr Anonymous</span>{" "}
        {/* handle name dynamically */}
      </section>
      <section className="block ml-[30px] mr-5 mt-1 mb-7">
        <span className="text-[#8696a0]">
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </span>
      </section>
      <section className="px-[30px] pt-3.5 pb-2.5">
        <span className="block text-[#008069] mb-3.5">About</span>
        <span className="block text-[#d1d7db]">Eat! Code! Sleep! Repeat!</span>
      </section>
    </>
  );
}
