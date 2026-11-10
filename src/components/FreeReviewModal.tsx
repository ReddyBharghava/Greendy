
import { FaTimes } from "react-icons/fa";

interface FreeReviewModalProps {
  onClose: () => void;
}

const FreeReviewModal = ({ onClose }: FreeReviewModalProps) => {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-5"
      onClick={onClose}
    >
      {/* Popup Container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-[760px]
          max-h-[92vh]
          overflow-y-auto
          rounded-lg
          border-2
          border-emerald-400
          bg-white
          p-6
          sm:p-8
          md:p-10
          shadow-[0_0_20px_5px_rgba(0,208,132,0.35)]
        "
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close popup"
          className="
            absolute
            right-3
            top-3
            sm:right-4
            sm:top-4
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white
            text-gray-900
            text-xl
            shadow-md
            hover:bg-gray-100
            transition
          "
        >
          <FaTimes />
        </button>

        {/* Heading */}
        <div className="mb-7 sm:mb-8 pr-8">
          <h2
            id="review-modal-title"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black leading-tight"
          >
            Get Your Free Website Checkup
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-800 leading-6 sm:leading-7">
            Discover main benefits and issues of your website and
            how to fix them.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5"
        >
          {/* Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
            <input
              type="text"
              placeholder="Full Name*"
              aria-label="Full Name"
              required
              autoFocus
              className="
                w-full
                h-14
                rounded-xl
                border-2
                border-emerald-400
                px-4
                text-gray-700
                placeholder-gray-500
                outline-none
                shadow-sm
                focus:ring-2
                focus:ring-emerald-400
              "
            />

            <input
              type="email"
              placeholder="Email Address*"
              aria-label="Email Address"
              required
              className="
                w-full
                h-14
                rounded-xl
                border-2
                border-gray-300
                px-4
                text-gray-700
                placeholder-gray-500
                outline-none
                shadow-sm
                focus:border-emerald-400
                focus:ring-2
                focus:ring-emerald-400
              "
            />
          </div>

          {/* Phone and Website */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
            <input
              type="tel"
              placeholder="Phone Number"
              aria-label="Phone Number"
              className="
                w-full
                h-14
                rounded-xl
                border-2
                border-gray-300
                px-4
                text-gray-700
                placeholder-gray-500
                outline-none
                shadow-sm
                focus:border-emerald-400
                focus:ring-2
                focus:ring-emerald-400
              "
            />

            <input
              type="url"
              placeholder="Website Url"
              aria-label="Website URL"
              className="
                w-full
                h-14
                rounded-xl
                border-2
                border-gray-300
                px-4
                text-gray-700
                placeholder-gray-500
                outline-none
                shadow-sm
                focus:border-emerald-400
                focus:ring-2
                focus:ring-emerald-400
              "
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Message..."
            aria-label="Message"
            rows={6}
            className="
              w-full
              min-h-[150px]
              sm:min-h-[185px]
              rounded-xl
              border-2
              border-gray-300
              px-4
              py-3
              text-gray-700
              placeholder-gray-500
              outline-none
              resize-y
              shadow-sm
              focus:border-emerald-400
              focus:ring-2
              focus:ring-emerald-400
            "
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full
              sm:w-auto
              bg-[#00B978]
              hover:bg-[#009F67]
              text-white
              font-semibold
              px-8
              py-3.5
              rounded-md
              transition
              duration-300
            "
          >
            Get My Free Checkup
          </button>
        </form>
      </div>
    </div>
  );
};

export default FreeReviewModal;
