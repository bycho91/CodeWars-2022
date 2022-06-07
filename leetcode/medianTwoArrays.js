/*

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/

function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);

  let halfway;

  if (merged.length % 2 === 0) {
    halfway = merged.length / 2;
    return (merged[halfway - 1] + merged[halfway]) / 2;
  }

  halfway = Math.floor(merged.length / 2);
  return merged[halfway];
}
