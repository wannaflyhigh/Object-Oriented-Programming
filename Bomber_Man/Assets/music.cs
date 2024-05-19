using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class music : MonoBehaviour
{
    public AudioSource audioSource;
    public AudioClip connectSound;
    public AudioClip collisionSound;

    private void Start()
    {
        audioSource = GetComponent<AudioSource>();
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("WaterBall"))
        {
            audioSource.PlayOneShot(collisionSound);
        }
    }

    private void OnWaterBallMeet()
    {
        audioSource.PlayOneShot(connectSound);
    }

}
