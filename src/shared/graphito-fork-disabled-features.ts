// Graphito internal fork: toggles for upstream features this fork does not
// use. Kept as explicit, named constants (not deleted code) so a future
// `git pull`/rebase from stablyai/orca stays low-diff and reversible.

/**
 * SSH hosts and paired Remote Orca Servers ("Add host" in the workspace/run
 * target pickers). This fork only runs agents locally.
 */
export const REMOTE_HOSTS_ENABLED = false
