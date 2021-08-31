const defaults = {
  submissionUrlEnvVarName: 'submissionUrl'
}

export const config = {
  /** the name of the environment variable representing the submission link, exposed to a Posmtan test collection for use in tests like {{submissionLink}}. */
  submissionUrlEnvVarName:
    process.env.SUBMISSION_ENV_VAR_NAME || defaults.submissionUrlEnvVarName
}
