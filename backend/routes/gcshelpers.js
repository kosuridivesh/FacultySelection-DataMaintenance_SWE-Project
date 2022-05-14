/**
 * Copy file from local to a GCS bucket.
 * Uploaded file will be made publicly accessible.
 *
 * @param {string} localFilePath
 * @param {string} bucketName
 * @param {Object} [options]
 * @return {Promise.<string>} - The public URL of the uploaded file.
 */

const { Storage } = require("@google-cloud/storage");

const GOOGLE_CLOUD_PROJECT_ID = "gcs-demo-123456"; // Replace with your project ID
const GOOGLE_CLOUD_KEYFILE = "fleet-codex-340706-54a4f727af1c.json"; // Replace with the path to the downloaded private key

exports.storage = new Storage({
  //   projectId: GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: GOOGLE_CLOUD_KEYFILE,
});

/**
 * Get public URL of a file. The file must have public access
 * @param {string} bucketName
 * @param {string} fileName
 * @return {string}
 */
exports.getPublicUrl = (bucketName, fileName) =>
  `https://storage.googleapis.com/${bucketName}/${fileName}`;

exports.copyFileToGCS = (localFilePath, bucketName, options) => {
  options = options || {};

  const bucket = storage.bucket(bucketName);
  const fileName = path.basename(localFilePath);
  const file = bucket.file(fileName);

  return bucket
    .upload(localFilePath, options)
    .then(() => file.makePublic())
    .then(() => exports.getPublicUrl(bucketName, gcsName));
};
