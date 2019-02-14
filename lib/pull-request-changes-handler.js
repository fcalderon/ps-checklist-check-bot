/** @namespace context.config */
/** @namespace context.issue */
/** @namespace context.github */
/** @namespace context.github.issues */
/** @namespace context.github.issues.deleteLabel */
/** @namespace context.github.repos */
/** @namespace context.github.repos.createRelease */
/** @namespace context.payload */
/** @namespace context.payload.changes */
/** @namespace context.payload.label */
/** @namespace context.payload.number */
/** @namespace context.payload.pull_request */
/** @namespace context.payload.pull_request.merged */
/** @namespace context.payload.pull_request.labels */
/** @namespace context.payload.pull_request.title */
/** @namespace context.payload.pull_request.body */
/** @namespace context.payload.pull_request.base */
/** @namespace context.payload.pull_request.base.ref */
/** @namespace require */
/** @namespace module */

/**
 * Reads the pull request and checks whether it passes based on the following conditions:
 * - If the PR has a label that is marked as ignored in the configuration, it returns {@code false}
 * - If the PR does not have a label that is marked as ignored it will:
 * 1. fetch the PULL_REQUEST_TEMPLATE.md (if not found, it just returns false)
 * 2. scan the PULL_REQUEST_TEMPLATE.md for required checks
 * 3. if required checks are found, look for those checks in the current PR body
 *     a. if all the required checks are satisfied, the check passes
 *     b. otherwise the check fails
 *
 * @param pull_request
 * @returns whether the check failed
 */

async function onPullRequestChanged(context) {
  const { payload } = context

  if (payload.pull_request) {
    /*
     * We only care about the following cases in order to run the check:
     * 1. opened: when the PR is created
     * 2. reopened: if a PR has been reopened
     * 3. edited: if the body of a PR has been updated
     * 4. labeled: if a labeled was added we need to check whether the label is ignored and update the check if
     *    necessary
     * 5. unlabeled: if a label that was ignored has been removed
     */
    switch (payload.action) {
      case 'opened':
      case 'reopened':
      case 'edited':
      case 'labeled':
      case 'unlabeled':
    }
  }
}
