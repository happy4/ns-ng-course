/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.android.view.animation;

public class LinearInterpolator_vendor___CustomLinearInterpolator
    extends android.view.animation.LinearInterpolator
    implements com.tns.NativeScriptHashCodeProvider {
  public LinearInterpolator_vendor___CustomLinearInterpolator() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public LinearInterpolator_vendor___CustomLinearInterpolator(
      android.content.Context param_0, android.util.AttributeSet param_1) {
    super(param_0, param_1);
    com.tns.Runtime.initInstance(this);
  }

  public float getInterpolation(float param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (float) com.tns.Runtime.callJSMethod(this, "getInterpolation", float.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}