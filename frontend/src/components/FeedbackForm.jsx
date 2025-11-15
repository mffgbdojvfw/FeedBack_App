// // import { useState } from 'react'
// // import { createFeedback } from '../services/api'
// // import './FeedbackForm.css'

// // const FeedbackForm = ({ apiUrl, onSubmit }) => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     message: '',
// //     rating: 5
// //   })
// //   const [loading, setLoading] = useState(false)
// //   const [error, setError] = useState('')
// //   const [success, setSuccess] = useState(false)

// //   const handleChange = (e) => {
// //     const { name, value } = e.target
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: name === 'rating' ? parseInt(value) : value
// //     }))
// //     setError('')
// //     setSuccess(false)
// //   }

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()
// //     setError('')
// //     setSuccess(false)
// //     setLoading(true)

// //     // Client-side validation
// //     if (!formData.name.trim()) {
// //       setError('Name is required')
// //       setLoading(false)
// //       return
// //     }

// //     if (!formData.message.trim()) {
// //       setError('Message is required')
// //       setLoading(false)
// //       return
// //     }

// //     try {
// //       await createFeedback(apiUrl, formData)
// //       setSuccess(true)
// //       setFormData({
// //         name: '',
// //         email: '',
// //         message: '',
// //         rating: 5
// //       })
// //       onSubmit()
      
// //       // Clear success message after 3 seconds
// //       setTimeout(() => setSuccess(false), 3000)
// //     } catch (err) {
// //       setError(err.response?.data?.error || 'Failed to submit feedback. Please try again.')
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   return (
// //     <div className="feedback-form-card">
// //       <h2>Submit Feedback</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-group">
// //           <label htmlFor="name">Name <span className="required">*</span></label>
// //           <input
// //             type="text"
// //             id="name"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             placeholder="Enter your name"
// //             required
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="email">Email</label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             placeholder="Enter your email"
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="message">Message <span className="required">*</span></label>
// //           <textarea
// //             id="message"
// //             name="message"
// //             value={formData.message}
// //             onChange={handleChange}
// //             placeholder="Enter your feedback message"
// //             rows="4"
// //             required
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="rating">Rating <span className="required">*</span></label>
// //           <div className="rating-input">
// //             {[1, 2, 3, 4, 5].map(star => (
// //               <label key={star} className="star-label">
// //                 <input
// //                   type="radio"
// //                   name="rating"
// //                   value={star}
// //                   checked={formData.rating === star}
// //                   onChange={handleChange}
// //                 />
// //                 <span className={`star ${formData.rating >= star ? 'filled' : ''}`}>
// //                   ⭐
// //                 </span>
// //               </label>
// //             ))}
// //             <span className="rating-value">({formData.rating}/5)</span>
// //           </div>
// //         </div>

// //         {error && <div className="error-message">{error}</div>}
// //         {success && <div className="success-message">Feedback submitted successfully! 🎉</div>}

// //         <button type="submit" className="submit-btn" disabled={loading}>
// //           {loading ? 'Submitting...' : 'Submit Feedback'}
// //         </button>
// //       </form>
// //     </div>
// //   )
// // }

// // export default FeedbackForm

// import { useState } from 'react'
// import { createFeedback } from '../services/api'
// import './FeedbackForm.css'

// const FeedbackForm = ({ apiUrl, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//     rating: 5
//   })
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState('')
//   const [success, setSuccess] = useState(false)
//   const [hover, setHover] = useState(0)

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: name === 'rating' ? parseInt(value) : value
//     }))
//     setError('')
//     setSuccess(false)
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError('')
//     setSuccess(false)
//     setLoading(true)

//     if (!formData.name.trim()) {
//       setError('Name is required')
//       setLoading(false)
//       return
//     }
//     if (!formData.message.trim()) {
//       setError('Message is required')
//       setLoading(false)
//       return
//     }

//     try {
//       await createFeedback(apiUrl, formData)
//       setSuccess(true)
//       setFormData({
//         name: '',
//         email: '',
//         message: '',
//         rating: 5
//       })
//       onSubmit()
//       setTimeout(() => setSuccess(false), 3000)
//     } catch (err) {
//       setError(err.response?.data?.error || 'Failed to submit feedback. Please try again.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="feedback-form-card">
//       <h2>Submit Feedback</h2>
//       <form onSubmit={handleSubmit}>

//         {/* NAME */}
//         <div className="form-group">
//           <label htmlFor="name">Name <span className="required">*</span></label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             required
//           />
//         </div>

//         {/* EMAIL */}
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//           />
//         </div>

//         {/* MESSAGE */}
//         <div className="form-group">
//           <label htmlFor="message">Message <span className="required">*</span></label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Enter your feedback message"
//             rows="4"
//             required
//           />
//         </div>

//         {/* RATING */}
//         <div className="form-group">
//           <label>Rating <span className="required">*</span></label>
//           <div className="rating-stars">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <span
//                 key={star}
//                 className={
//                   (hover || formData.rating) >= star ? "star filled" : "star"
//                 }
//                 onClick={() => setFormData({ ...formData, rating: star })}
//                 onMouseEnter={() => setHover(star)}
//                 onMouseLeave={() => setHover(0)}
//               >
//                 ★
//               </span>
//             ))}
//             <span className="rating-value">({formData.rating}/5)</span>
//           </div>
//         </div>

//         {error && <div className="error-message">{error}</div>}
//         {success && <div className="success-message">Feedback submitted successfully! 🎉</div>}

//         <button type="submit" className="submit-btn" disabled={loading}>
//           {loading ? 'Submitting...' : 'Submit Feedback'}
//         </button>
//       </form>
//     </div>
//   )
// }

// export default FeedbackForm


import { useState } from "react";
import { createFeedback } from "../services/api";
import "./FeedbackForm.css";

const FeedbackForm = ({ apiUrl, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 0, // ⭐ DEFAULT EMPTY STARS
  });

  const [hoverRating, setHoverRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.name.trim()) return setError("Name is required");
    if (!formData.message.trim()) return setError("Message is required");

    setLoading(true);

    try {
      await createFeedback(apiUrl, formData);

      setSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        rating: 0, // ⭐ RESET TO EMPTY
      });

      if (onSubmit) onSubmit();

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Failed to submit feedback. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="feedback-form-card">
      <h2>Submit Feedback</h2>

      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <div className="form-group">
          <label>Name <span className="required">*</span></label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* EMAIL */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* MESSAGE */}
        <div className="form-group">
          <label>Message <span className="required">*</span></label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* RATING */}
        <div className="form-group">
          <label>Rating <span className="required">*</span></label>

          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((starValue) => (
              <span
                key={starValue}
                className={
                  (hoverRating || formData.rating) >= starValue
                    ? "star filled"
                    : "star"
                }
                onClick={() =>
                  setFormData((prev) => ({ ...prev, rating: starValue }))
                }
                onMouseEnter={() => setHoverRating(starValue)}
                onMouseLeave={() => setHoverRating(0)}
              >
                ★
              </span>
            ))}

            <span className="rating-value">
              ({formData.rating}/5)
            </span>
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && (
          <div className="success-message">
            Feedback submitted successfully! 🎉
          </div>
        )}

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
