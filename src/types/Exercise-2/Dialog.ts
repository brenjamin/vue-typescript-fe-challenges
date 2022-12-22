// using vue3-promise-dialog package, which uses promises to manage dialog behavior
// example here: https://stackblitz.com/edit/vitejs-vite-nzzfdg?&terminal=dev
import { openDialog } from 'vue3-promise-dialog'
import SaveDialog from '../../components/Exercise-2/SaveDialog.vue'

export async function confirm(text: string): Promise<boolean> {
  return await openDialog(SaveDialog, { text })
}
