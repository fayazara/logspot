import { computed } from "vue";

/**
 *
 * @param {*} el_target_ref The Root element for which clicking outside will trigger callback_fn
 * @param {*} on_click_outside The function to call when user clicks outside of
 * @param {Function} callback_condition Function, if provided, returns boolean indication if click outside should be allowed to happen
 * @returns
 */
export async function useClickOutside(
  el_target_ref,
  on_click_outside,
  callback_condition
) {
  if (!el_target_ref) return;
  if (!el_target_ref.value) {
    console.log(
      "useClickOutside",
      "target element was not supplied or is null"
    );
    //return
  }

  var dont_use_first_click = 0;
  let listener = async (e) => {
    var enable_click_outside = true;
    if (typeof callback_condition == "function") {
      enable_click_outside = await callback_condition();
    }
    if (!enable_click_outside) return;
    if (dont_use_first_click == 0) {
      dont_use_first_click++;
      return;
    }
    if (
      e.target == el_target_ref.value ||
      e.composedPath().includes(el_target_ref.value)
    ) {
      return;
    }

    if (enable_click_outside && typeof on_click_outside == "function") {
      on_click_outside();
    }
  };

  onMounted(() => {
    window.addEventListener("click", listener);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  });
  return {
    listener,
  };
}
