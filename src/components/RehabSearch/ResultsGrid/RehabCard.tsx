import React, { useState } from "react";
import {
  useAddReview,
  useReviewsByRehab,
  Review,
  Rehab,
} from "@/hooks/apolloHooks/rehabHooks";

const RehabCard: React.FC<{ rehab: Rehab; userId?: number }> = ({
  rehab,
  userId,
}) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <h2 className="text-lg font-bold mb-2">{rehab.name}</h2>
      <div className="text-sm text-gray-600 mb-1">{rehab.address}</div>
      <div className="text-sm text-gray-800 mb-2">{rehab.description}</div>
      <div className="flex flex-wrap gap-2 text-xs">
        {rehab.amenities?.length && rehab.amenities.length > 0 && (
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
            Amenities: {rehab.amenities.map((a) => a.name).join(", ")}
          </span>
        )}
        {rehab.approaches?.length && rehab.approaches.length > 0 && (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
            Approaches: {rehab.approaches.map((a) => a.name).join(", ")}
          </span>
        )}
        {rehab.treatments?.length && rehab.treatments.length > 0 && (
          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
            Treatments: {rehab.treatments.map((t) => t.name).join(", ")}
          </span>
        )}
      </div>
      {userId && <ReviewSection rehabId={rehab.id} userId={userId} />}
    </div>
  );
};

const ReviewSection: React.FC<{ rehabId: number; userId: number }> = ({
  rehabId,
  userId,
}) => {
  const { data, loading, error, refetch } = useReviewsByRehab(rehabId);
  const [addReview] = useAddReview();
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  console.log(errorMsg);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");
    try {
      await addReview({
        variables: { input: { rehabId, userId, content, rating } },
      });
      setContent("");
      setRating(5);
      refetch();
    } catch (error: any) {
      setErrorMsg(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">Leave a Review</h3>
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <textarea
          className="w-full border rounded p-2"
          rows={2}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your review..."
          required
        />
        <div className="flex items-center gap-2">
          <label>Rating:</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="border rounded p-1"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="ml-auto bg-blue-600 text-white px-3 py-1 rounded"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
        {errorMsg && <div className="text-red-500 text-sm">{errorMsg}</div>}
      </form>
      <h4 className="font-semibold mb-1">Reviews</h4>
      {loading ? (
        <div>Loading reviews...</div>
      ) : error ? (
        <div className="text-red-500">Error loading reviews</div>
      ) : (
        <div className="space-y-2">
          {data?.reviewsByRehab?.length === 0 && <div>No reviews yet.</div>}
          {data?.reviewsByRehab?.map((review: Review) => (
            <div key={review.id} className="border rounded p-2 bg-gray-50">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-sm">
                  {review.user?.name || "User"}
                </span>
                <span className="text-yellow-500">
                  {"★".repeat(review.rating)}
                </span>
                <span className="text-xs text-gray-400 ml-auto">
                  {new Date(review.createdAt).toLocaleString()}
                </span>
              </div>
              <div className="text-sm">{review.content}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RehabCard;
