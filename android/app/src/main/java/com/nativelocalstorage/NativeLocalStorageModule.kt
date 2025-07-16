package com.nativelocalstorage

import android.content.Context
import android.content.SharedPreferences

import android.app.Activity
import android.view.View
import android.graphics.Color

import com.nativelocalstorage.NativeLocalStorageSpec
import com.facebook.react.bridge.ReactApplicationContext





class NativeLocalStorageModule(reactContext: ReactApplicationContext) : NativeLocalStorageSpec(reactContext) {

    override fun getName() = NAME



    override fun multiply(a: Double, b: Double): Double {
        return a * b
    }
    override fun helloword(): String {
        return "Hello Word"
    }

    private fun getActivity(): Activity? = currentActivity

    override fun hideNavigationBar() {
        val activity = getActivity() ?: return

        activity.runOnUiThread {
            val window = activity.window
            val decorView = window.decorView

            decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION or View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION or View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY

        }
    }

    override fun showNavigationBar() {
        val activity = getActivity() ?: return

        activity.runOnUiThread {
            val window = activity.window
            val decorView = window.decorView

            decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_VISIBLE
            window.navigationBarColor = Color.BLACK
        }
    }


    override fun toggleNavigationBar() {
        val activity = getActivity() ?: return

        activity.runOnUiThread {
            val window = activity.window
            val decorView = window.decorView

            val flags = decorView.systemUiVisibility
            val isVisible = (flags and View.SYSTEM_UI_FLAG_HIDE_NAVIGATION == 0)

            if (isVisible) {
                hideNavigationBar()
            } else {
                showNavigationBar()
            }
        }
    }





    companion object {
        const val NAME = "NativeLocalStorage"
    }
}
