/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.androidx.viewpager.widget;

public class PagerAdapter_vendor_38417_28_FragmentPagerAdapter
    extends androidx.viewpager.widget.PagerAdapter implements com.tns.NativeScriptHashCodeProvider {
  public PagerAdapter_vendor_38417_28_FragmentPagerAdapter() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public int getCount() {
    java.lang.Object[] args = new java.lang.Object[0];
    return (int) com.tns.Runtime.callJSMethod(this, "getCount", int.class, args);
  }

  public boolean isViewFromObject(android.view.View param_0, java.lang.Object param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    return (boolean) com.tns.Runtime.callJSMethod(this, "isViewFromObject", boolean.class, args);
  }

  public void startUpdate(android.view.ViewGroup param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "startUpdate", void.class, args);
  }

  public java.lang.Object instantiateItem(android.view.ViewGroup param_0, int param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    return com.tns.Runtime.callJSMethod(this, "instantiateItem", java.lang.Object.class, args);
  }

  public void destroyItem(android.view.ViewGroup param_0, int param_1, java.lang.Object param_2) {
    java.lang.Object[] args = new java.lang.Object[3];
    args[0] = param_0;
    args[1] = param_1;
    args[2] = param_2;
    com.tns.Runtime.callJSMethod(this, "destroyItem", void.class, args);
  }

  public void setPrimaryItem(
      android.view.ViewGroup param_0, int param_1, java.lang.Object param_2) {
    java.lang.Object[] args = new java.lang.Object[3];
    args[0] = param_0;
    args[1] = param_1;
    args[2] = param_2;
    com.tns.Runtime.callJSMethod(this, "setPrimaryItem", void.class, args);
  }

  public void finishUpdate(android.view.ViewGroup param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "finishUpdate", void.class, args);
  }

  @SuppressWarnings("deprecation")
  public void startUpdate(android.view.View param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "startUpdate", void.class, args);
  }

  @SuppressWarnings("deprecation")
  public java.lang.Object instantiateItem(android.view.View param_0, int param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    return com.tns.Runtime.callJSMethod(this, "instantiateItem", java.lang.Object.class, args);
  }

  @SuppressWarnings("deprecation")
  public void destroyItem(android.view.View param_0, int param_1, java.lang.Object param_2) {
    java.lang.Object[] args = new java.lang.Object[3];
    args[0] = param_0;
    args[1] = param_1;
    args[2] = param_2;
    com.tns.Runtime.callJSMethod(this, "destroyItem", void.class, args);
  }

  @SuppressWarnings("deprecation")
  public void setPrimaryItem(android.view.View param_0, int param_1, java.lang.Object param_2) {
    java.lang.Object[] args = new java.lang.Object[3];
    args[0] = param_0;
    args[1] = param_1;
    args[2] = param_2;
    com.tns.Runtime.callJSMethod(this, "setPrimaryItem", void.class, args);
  }

  @SuppressWarnings("deprecation")
  public void finishUpdate(android.view.View param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "finishUpdate", void.class, args);
  }

  public android.os.Parcelable saveState() {
    java.lang.Object[] args = new java.lang.Object[0];
    return (android.os.Parcelable)
        com.tns.Runtime.callJSMethod(this, "saveState", android.os.Parcelable.class, args);
  }

  public void restoreState(android.os.Parcelable param_0, java.lang.ClassLoader param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    com.tns.Runtime.callJSMethod(this, "restoreState", void.class, args);
  }

  public int getItemPosition(java.lang.Object param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (int) com.tns.Runtime.callJSMethod(this, "getItemPosition", int.class, args);
  }

  public java.lang.CharSequence getPageTitle(int param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (java.lang.CharSequence)
        com.tns.Runtime.callJSMethod(this, "getPageTitle", java.lang.CharSequence.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
