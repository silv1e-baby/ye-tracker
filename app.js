/**
 * YE TRACKER - Album-Centric Architecture
 */

// ==========================================
// 🎵 ALBUM DATABASE (Nested Structure)
// ==========================================
const ALBUMS = [
    {
        id: 'college-dropout',
        title: 'The College Dropout',
        year: '2004',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/tcd.png?raw=true',
        tracks: [
            { id: 'tcd-1', title: "Intro", duration: "1:47", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-01.mp3" },
            { id: 'tcd-2', title: "We Don't Care", duration: "3:59", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-02.mp3" },
            { id: 'tcd-3', title: "Graduation Day", duration: "1:22", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-03.mp3" },
            { id: 'tcd-4', title: "All Falls Down", duration: "3:43", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-04.mp3" },
            { id: 'tcd-5', title: "I'll Fly Away", duration: "1:09", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-05.mp3" },
            { id: 'tcd-6', title: "Spaceship", duration: "5:24", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-06.mp3" },
            { id: 'tcd-7', title: "Jesus Walks", duration: "3:13", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-07.mp3" },
            { id: 'tcd-8', title: "Never Let Me Down", duration: "4:44", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-08.mp3" },
            { id: 'tcd-9', title: "Get Em High", duration: "4:49", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-09.mp3" },
            { id: 'tcd-10', title: "Workout Plan", duration: "4:15", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-10.mp3" },
            { id: 'tcd-11', title: "The New Workout Plan", duration: "4:15", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-11.mp3" },
            { id: 'tcd-12', title: "Slow Jamz", duration: "5:16", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-12.mp3" },
            { id: 'tcd-13', title: "Breathe In Breathe Out", duration: "4:08", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-13.mp3" },
            { id: 'tcd-14', title: "School Spirit Skit 1", duration: "1:15", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-14.mp3" },
            { id: 'tcd-15', title: "School Spirit", duration: "2:42", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-15.mp3" },
            { id: 'tcd-16', title: "School Spirit Skit 2", duration: "1:18", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-16.mp3" },
            { id: 'tcd-17', title: "Lil Jimmy Skit", duration: "0:49", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-17.mp3" },
            { id: 'tcd-18', title: "Two Words", duration: "4:26", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-18.mp3" },
            { id: 'tcd-19', title: "Through The Wire", duration: "3:41", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-19.mp3" },
            { id: 'tcd-20', title: "Family Business", duration: "4:38", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-20.mp3" },
            { id: 'tcd-21', title: "Last Call", duration: "8:40", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/college-dropout/COLLEGE-DROPOUT-21.mp3" }
        ]
    },
    {
        id: 'late-registration',
        title: 'Late Registration',
        year: '2005',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/late-registration.png?raw=true',
        tracks: [
            { id: 'lr-1', title: "Wake Up Mr. West", duration: "0:41", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-01.mp3" },
            { id: 'lr-2', title: "Heard 'Em Say", duration: "3:23", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-02.mp3" },
            { id: 'lr-3', title: "Touch the Sky", duration: "3:57", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-03.mp3" },
            { id: 'lr-4', title: "Gold Digger", duration: "3:28", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-04.mp3" },
            { id: 'lr-5', title: "Skit #1", duration: "0:33", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-05.mp3" },
            { id: 'lr-6', title: "Drive Slow", duration: "4:32", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-06.mp3" },
            { id: 'lr-7', title: "My Way Home", duration: "1:43", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-07.mp3" },
            { id: 'lr-8', title: "Crack Music", duration: "4:29", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-08.mp3" },
            { id: 'lr-9', title: "Roses", duration: "4:09", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-09.mp3" },
            { id: 'lr-10', title: "Bring Me Down", duration: "3:19", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-10.mp3" },
            { id: 'lr-11', title: "Addiction", duration: "3:31", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-11.mp3" },
            { id: 'lr-12', title: "Skit #2", duration: "0:31", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-12.mp3" },
            { id: 'lr-13', title: "Diamonds From Sierra Leone (Remix)", duration: "3:58", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-13.mp3" },
            { id: 'lr-14', title: "We Major", duration: "7:28", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-14.mp3" },
            { id: 'lr-15', title: "Skit #3", duration: "0:40", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-15.mp3" },
            { id: 'lr-16', title: "Hey Mama", duration: "5:05", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-16.mp3" },
            { id: 'lr-17', title: "Celebration", duration: "3:40", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-17.mp3" },
            { id: 'lr-18', title: "Skit #4", duration: "0:51", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-18.mp3" },
            { id: 'lr-19', title: "Gone", duration: "6:03", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-19.mp3" },
            { id: 'lr-20', title: "Diamonds from Sierra Leone", duration: "3:58", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-20.mp3" },
            { id: 'lr-21', title: "Late", duration: "3:40", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/late-registration/LATE-REGISTRATION-21.mp3" }
        ]
    },
    {
        id: 'graduation',
        title: 'Graduation',
        year: '2007',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/grad.png?raw=true',
        tracks: [
            { id: 'grad-1', title: "Good Morning", duration: "3:15", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-01.mp3" },
            { id: 'grad-2', title: "Champion", duration: "2:48", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-02.mp3" },
            { id: 'grad-3', title: "Stronger", duration: "5:12", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-03.mp3" },
            { id: 'grad-4', title: "I Wonder", duration: "4:03", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-04.mp3" },
            { id: 'grad-5', title: "Good Life", duration: "3:27", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-05.mp3" },
            { id: 'grad-6', title: "Can't Tell Me Nothing", duration: "4:31", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-06.mp3" },
            { id: 'grad-7', title: "Barry Bonds", duration: "3:24", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-07.mp3" },
            { id: 'grad-8', title: "Drunk and Hot Girls", duration: "5:13", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-08.mp3" },
            { id: 'grad-9', title: "Flashing Lights", duration: "3:57", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-09.mp3" },
            { id: 'grad-10', title: "Everything I Am", duration: "3:47", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-10.mp3" },
            { id: 'grad-11', title: "The Glory", duration: "3:34", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-11.mp3" },
            { id: 'grad-12', title: "Homecoming", duration: "3:23", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-12.mp3" },
            { id: 'grad-13', title: "Big Brother", duration: "4:47", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-13.mp3" },
            { id: 'grad-14', title: "Good Night", duration: "3:06", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-14.mp3" },
            { id: 'grad-15', title: "Bittersweet Poetry", duration: "4:02", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-15.mp3" }
        ]
    },
    {
        id: '808s',
        title: '808s & Heartbreak',
        year: '2008',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/808s.png?raw=true',
        tracks: [
            { id: '808-1', title: "Say You Will", duration: "6:15", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-01.mp3" },
            { id: '808-2', title: "Welcome To Heartbreak", duration: "4:23", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-02.mp3" },
            { id: '808-3', title: "Heartless", duration: "3:31", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-03.mp3" },
            { id: '808-4', title: "Amazing", duration: "3:58", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-04.mp3" },
            { id: '808-5', title: "Love Lockdown", duration: "4:30", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-05.mp3" },
            { id: '808-6', title: "Paranoid", duration: "4:37", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-06.mp3" },
            { id: '808-7', title: "RoboCop", duration: "4:34", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-07.mp3" },
            { id: '808-8', title: "Street Lights", duration: "3:09", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-08.mp3" },
            { id: '808-9', title: "Bad News", duration: "3:59", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-09.mp3" },
            { id: '808-10', title: "See You In My Nightmares", duration: "4:18", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-10.mp3" },
            { id: '808-11', title: "Coldest Winter", duration: "2:45", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-11.mp3" },
            { id: '808-12', title: "Pinocchio Story", duration: "6:04", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-12.mp3" }
        ]
    },
    {
        id: 'mbdtf',
        title: 'My Beautiful Dark Twisted Fantasy',
        year: '2010',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/mbdtf.jpg?raw=true',
        tracks: [
        { id: 'mbdtf-1', title: "Dark Fantasy", duration: "4:41", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-01.mp3" },
        { id: 'mbdtf-2', title: "Gorgeous", duration: "5:58", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-02.mp3" },
        { id: 'mbdtf-3', title: "POWER", duration: "4:52", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-03.mp3" },
        { id: 'mbdtf-4', title: "All Of The Lights (Interlude)", duration: "1:02", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-04.mp3" },
        { id: 'mbdtf-5', title: "All Of The Lights", duration: "5:00", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-05.mp3" },
        { id: 'mbdtf-6', title: "Monster", duration: "6:19", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-06.mp3" },
        { id: 'mbdtf-7', title: "So Appalled", duration: "6:38", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-07.mp3" },
        { id: 'mbdtf-8', title: "Devil In A New Dress", duration: "5:52", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-08.mp3" },
        { id: 'mbdtf-9', title: "Runaway", duration: "9:08", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-09.mp3" },
        { id: 'mbdtf-10', title: "Hell Of A Life", duration: "5:28", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-10.mp3" },
        { id: 'mbdtf-11', title: "Blame Game", duration: "7:50", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-11.mp3" },
        { id: 'mbdtf-12', title: "Lost In The World", duration: "4:17", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-12.mp3" },    
        { id: 'mbdtf-13', title: "Who Will Survive In America", duration: "1:38", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-13.mp3" },    
        ]
    },
    {
        id: 'wtt',
        title: 'Watch the Throne',
        year: '2011',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/wtt.jpg?raw=true',
        tracks: [
            { id: 'wtt-1', title: "No Church in the Wild", duration: "4:32", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/wtt/WTT-01.mp3" },
            { id: 'wtt-2', title: "Lift Off", duration: "4:35", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/wtt/WTT-02.mp3" },
            { id: 'wtt-3', title: "Fellaz in Paris", duration: "3:39", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/wtt/WTT-03.mp3" },
            { id: 'wtt-4', title: "Otis", duration: "2:58", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/wtt/WTT-04.mp3" },
            { id: 'wtt-5', title: "Gotta Have It", duration: "2:20", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/wtt/WTT-05.mp3" },
            { id: 'wtt-6', title: "New Day", duration: "4:32", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/wtt/WTT-06.mp3" },
            { id: 'wtt-7', title: "That's My Bitch", duration: "3:22", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/wtt/WTT-07.mp3" },
            { id: 'wtt-8', title: "Welcome to the Jungle", duration: "2:53", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/wtt/WTT-08.mp3" },
            { id: 'wtt-9', title: "Who Gon Stop Me", duration: "4:16", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/wtt/WTT-09.mp3" },
            { id: 'wtt-10', title: "Murder to Excellence", duration: "5:00", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/wtt/WTT-10.mp3" },
            { id: 'wtt-11', title: "Made in America", duration: "4:52", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/wtt/WTT-11.mp3" },
            { id: 'wtt-12', title: "Why I Love You", duration: "3:21", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/wtt/WTT-12.mp3" },
            { id: 'wtt-13', title: "Illest Motherfucker Alive", duration: "5:25", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/wtt/WTT-13.mp3" },
            { id: 'wtt-14', title: "H•A•M", duration: "4:35", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/wtt/WTT-14.mp3" },
            { id: 'wtt-15', title: "Primetime", duration: "3:19", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/wtt/WTT-15.mp3" },
            { id: 'wtt-16', title: "The Joy", duration: "5:17", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/wtt/WTT-16.mp3" }
        ]
    },
    {
        id: 'yeezus',
        title: 'Yeezus',
        year: '2013',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/yeezus.jpg?raw=true',
        tracks: [
            { id: 'yeezus-1', title: "On Sight", duration: "2:36", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-01.mp3" },
            { id: 'yeezus-2', title: "Black Skinhead", duration: "3:08", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-02.mp3" },
            { id: 'yeezus-3', title: "I Am A God", duration: "3:51", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-03.mp3" },
            { id: 'yeezus-4', title: "New Slaves", duration: "4:16", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-04.mp3" },
            { id: 'yeezus-5', title: "Hold My Liquor", duration: "5:26", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-05.mp3" },
            { id: 'yeezus-6', title: "I'm In It", duration: "3:54", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-06.mp3" },
            { id: 'yeezus-7', title: "Blood On The Leaves", duration: "4:09", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-07.mp3" },
            { id: 'yeezus-8', title: "Guilt Trip", duration: "4:03", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-08.mp3" },
            { id: 'yeezus-9', title: "Send It Up", duration: "2:58", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-09.mp3" },
            { id: 'yeezus-10', title: "Bound 2", duration: "3:49", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-10.mp3" }
        ]
    },
    {
        id: 'tlop',
        title: 'The Life of Pablo',
        year: '2016',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/tlop.png?raw=true',
        tracks: [
            { id: 'tlop-1', title: "Ultralight Beam", duration: "5:20", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-01.mp3" },
            { id: 'tlop-2', title: "Father Stretch My Hands Pt. 1", duration: "2:15", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-02.mp3" },
            { id: 'tlop-3', title: "Pt. 2", duration: "2:10", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-03.mp3" },
            { id: 'tlop-4', title: "Famous", duration: "3:16", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-04.mp3" },
            { id: 'tlop-5', title: "Feedback", duration: "2:19", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-05.mp3" },
            { id: 'tlop-6', title: "Low Lights", duration: "2:11", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-06.mp3" },
            { id: 'tlop-7', title: "Highlights", duration: "3:19", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-07.mp3" },
            { id: 'tlop-8', title: "Freestyle 4", duration: "2:03", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-08.mp3" },
            { id: 'tlop-9', title: "I Love Kanye", duration: "2:36", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-09.mp3" },
            { id: 'tlop-10', title: "Waves", duration: "3:01", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-10.mp3" },
            { id: 'tlop-11', title: "FML", duration: "3:56", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-11.mp3" },
            { id: 'tlop-12', title: "Real Friends", duration: "4:11", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-12.mp3" },
            { id: 'tlop-13', title: "Wolves", duration: "6:05", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-13.mp3" },
            { id: 'tlop-14', title: "Frank's Track", duration: "0:38", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-14.mp3" },
            { id: 'tlop-15', title: "Siiiiiiiiilver Surfffffer", duration: "1:16", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-15.mp3" },
            { id: 'tlop-16', title: "30 Hours", duration: "5:23", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-16.mp3" },
            { id: 'tlop-17', title: "No More Parties in LA", duration: "6:14", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-17.mp3" },
            { id: 'tlop-18', title: "Facts (Charlie Heat Version)", duration: "3:17", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-18.mp3" },
            { id: 'tlop-19', title: "Fade", duration: "3:13", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-19.mp3" },
            { id: 'tlop-20', title: "Saint Pablo", duration: "6:12", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/tlop/TLOP-20.mp3" },
        ]
    },
    {
        id: 'ye',
        title: 'Ye',
        year: '2018',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/ye.jpg?raw=true',
        tracks: [
            { id: 'ye-1', title: "I Thought About Killing You", duration: "4:34", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/ye/YE-01.mp3" },
            { id: 'ye-2', title: "Yikes", duration: "3:08", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/ye/YE-02.mp3" },
            { id: 'ye-3', title: "All Mine", duration: "2:25", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/ye/YE-03.mp3" },
            { id: 'ye-4', title: "Wouldn't Leave", duration: "3:25", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/ye/YE-04.mp3" },
            { id: 'ye-5', title: "No Mistakes", duration: "2:03", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/ye/YE-05.mp3" },
            { id: 'ye-6', title: "Ghost Town", duration: "4:31", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/ye/YE-06.mp3" },
            { id: 'ye-7', title: "Violent Crimes", duration: "3:35", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/ye/YE-07.mp3" }
        ]
    },
        {
        id: 'ksg',
        title: 'Kids See Ghosts',
        year: '2018',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/ksg.jpg?raw=true',
        tracks: [
            { id: 'ksg-1', title: "Feel the Love", duration: "2:45", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/ksg/KSG-01.mp3" },
            { id: 'ksg-2', title: "Fire", duration: "2:20", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/ksg/KSG-02.mp3" },
            { id: 'ksg-3', title: "4th Dimension", duration: "2:33", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/ksg/KSG-03.mp3" },
            { id: 'ksg-4', title: "Freeee (Ghost Town, Pt. 2)", duration: "3:26", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/ksg/KSG-04.mp3" },
            { id: 'ksg-5', title: "Reborn", duration: "5:24", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/ksg/KSG-05.mp3" },
            { id: 'ksg-6', title: "Kids See Ghosts", duration: "4:04", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/ksg/KSG-06.mp3" },
            { id: 'ksg-7', title: "Cudi Montage", duration: "3:18", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/ksg/KSG-07.mp3" }
        ]
    },
    {
        id: 'jik',
        title: 'Jesus Is King',
        year: '2019',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/jik.png?raw=true',
        tracks: [
            { id: 'jik-1', title: "Every Hour", duration: "1:52", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/jik/JIK-01.mp3" },
            { id: 'jik-2', title: "Selah", duration: "2:45", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/jik/JIK-02.mp3" },
            { id: 'jik-3', title: "Follow God", duration: "1:45", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/jik/JIK-03.mp3" },
            { id: 'jik-4', title: "Closed on Sunday", duration: "2:31", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/jik/JIK-04.mp3" },
            { id: 'jik-5', title: "On God", duration: "2:16", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/jik/JIK-05.mp3" },
            { id: 'jik-6', title: "Everything We Need", duration: "1:56", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/jik/JIK-06.mp3" },
            { id: 'jik-7', title: "Water", duration: "2:48", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/jik/JIK-07.mp3" },
            { id: 'jik-8', title: "God Is", duration: "3:23", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/jik/JIK-08.mp3" },
            { id: 'jik-9', title: "Hands On", duration: "3:23", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/jik/JIK-09.mp3" },
            { id: 'jik-10', title: "Use This Gospel", duration: "3:33", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/jik/JIK-10.mp3" },
            { id: 'jik-11', title: "Jesus Is Lord", duration: "0:49", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/jik/JIK-11.mp3" }
        ]
    },
    {
        id: 'donda-deluxe',
        title: 'DONDA (Deluxe)',
        year: '2021',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/donda.jpg?raw=true',
        tracks: [
            { id: 'donda-1', title: "Donda Chant", duration: "0:52", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-01.mp3" },
            { id: 'donda-2', title: "Hurricane", duration: "4:03", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-02.mp3" },
            { id: 'donda-3', title: "Moon", duration: "2:36", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-03.mp3" },
            { id: 'donda-4', title: "Life Of The Party", duration: "6:31", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-04.mp3" },
            { id: 'donda-5', title: "Off The Grid", duration: "5:39", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-05.mp3" },
            { id: 'donda-6', title: "Jail", duration: "4:57", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-06.mp3" },
            { id: 'donda-7', title: "Praise God", duration: "3:46", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-07.mp3" },
            { id: 'donda-8', title: "Come to Life", duration: "5:10", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-08.mp3" },
            { id: 'donda-9', title: "Believe What I Say", duration: "4:02", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-09.mp3" },
            { id: 'donda-10', title: "No Child Left Behind", duration: "2:58", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-10.mp3" },
            { id: 'donda-11', title: "Up From The Ashes", duration: "2:42", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-11.mp3" },
            { id: 'donda-12', title: "Remote Control pt 2", duration: "5:23", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-12.mp3" },
            { id: 'donda-13', title: "God Breathed", duration: "5:33", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-13.mp3" },
            { id: 'donda-14', title: "Lord I Need You", duration: "2:42", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-14.mp3" },
            { id: 'donda-15', title: "24", duration: "3:17", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-15.mp3" },
            { id: 'donda-16', title: "Junya", duration: "2:27", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-16.mp3" },
            { id: 'donda-17', title: "Never Abandon Your Family", duration: "3:27", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-17.mp3" },
            { id: 'donda-18', title: "Donda", duration: "2:08", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-18.mp3" },
            { id: 'donda-19', title: "Keep My Spirit Alive", duration: "3:41", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-19.mp3" },
            { id: 'donda-20', title: "Jesus Lord pt 2", duration: "12:05", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-20.mp3" },
            { id: 'donda-21', title: "Heaven and Hell", duration: "2:25", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-21.mp3" },
            { id: 'donda-22', title: "Remote Control", duration: "3:18", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-22.mp3" },
            { id: 'donda-23', title: "Tell The Vision", duration: "1:44", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-23.mp3" },
            { id: 'donda-24', title: "Jonah", duration: "3:15", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-24.mp3" },
            { id: 'donda-25', title: "Pure Souls", duration: "5:58", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-25.mp3" },
            { id: 'donda-26', title: "Ok Ok", duration: "3:24", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-26.mp3" },
            { id: 'donda-27', title: "New Again", duration: "3:03", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-27.mp3" },
            { id: 'donda-28', title: "Jesus Lord", duration: "9:33", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-28.mp3" },
            { id: 'donda-29', title: "Ok Ok pt 2", duration: "2:34", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-29.mp3" },
            { id: 'donda-30', title: "Junya pt 2", duration: "3:02", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-30.mp3" },
            { id: 'donda-31', title: "Jail pt 2", duration: "4:56", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-31.mp3" },
            { id: 'donda-32', title: "Keep My Spirit Alive pt 2", duration: "3:41", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda/DONDA-32.mp3" }
        ]
    },
    {
        id: 'vultures-1',
        title: 'VULTURES 1',
        year: '2024',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/vultures1.jpg?raw=true',
        tracks: [
            { id: 'v1-1', title: "Stars", duration: "2:45", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures1/V1-01.mp3" },
            { id: 'v1-2', title: "Keys to My Life", duration: "2:50", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures1/V1-02.mp3" },
            { id: 'v1-3', title: "Paid", duration: "2:55", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures1/V1-03.mp3" },
            { id: 'v1-4', title: "Talking", duration: "2:55", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures1/V1-04.mp3" },
            { id: 'v1-5', title: "Back to Me", duration: "3:20", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures1/V1-05.mp3" },
            { id: 'v1-6', title: "Hoodrat", duration: "3:15", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures1/V1-06.mp3" },
            { id: 'v1-7', title: "Do It", duration: "3:45", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures1/V1-07.mp3" },
            { id: 'v1-8', title: "Paperwork", duration: "3:25", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures1/V1-08.mp3" },
            { id: 'v1-9', title: "Burn", duration: "3:50", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures1/V1-09.mp3" },
            { id: 'v1-10', title: "Fuk Sumn", duration: "2:55", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures1/V1-10.mp3" },
            { id: 'v1-11', title: "Vultures", duration: "3:20", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures1/V1-11.mp3" },
            { id: 'v1-12', title: "Carnival", duration: "3:40", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures1/V1-12.mp3" },
            { id: 'v1-13', title: "Beg Forgiveness", duration: "3:25", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures1/V1-13.mp3" },
            { id: 'v1-14', title: "Good (Don't Die)", duration: "2:55", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures1/V1-14.mp3" },
            { id: 'v1-15', title: "Problematic", duration: "3:10", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures1/V1-15.mp3" },
            { id: 'v1-16', title: "King", duration: "3:00", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures1/V1-16.mp3" }
        ]
    },
    {
        id: 'vultures-2',
        title: 'VULTURES 2',
        year: '2024',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/vultures2.png?raw=true',
        tracks: [
            { id: 'v2-1', title: "Slide", duration: "2:55", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures2/V2-01.mp3" },
            { id: 'v2-2', title: "Time Moving Slow", duration: "3:20", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures2/V2-02.mp3" },
            { id: 'v2-3', title: "Fried", duration: "3:10", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures2/V2-03.mp3" },
            { id: 'v2-4', title: "Field Trip", duration: "3:15", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures2/V2-04.mp3" },
            { id: 'v2-5', title: "Isabella", duration: "3:20", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures2/V2-05.mp3" },
            { id: 'v2-6', title: "Promotion", duration: "3:05", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures2/V2-06.mp3" },
            { id: 'v2-7', title: "530", duration: "2:50", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures2/V2-07.mp3" },
            { id: 'v2-8', title: "Dead", duration: "3:00", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures2/V2-08.mp3" },
            { id: 'v2-9', title: "Forever Rolling", duration: "3:35", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures2/V2-09.mp3" },
            { id: 'v2-10', title: "Bomb", duration: "2:50", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures2/V2-10.mp3" },
            { id: 'v2-11', title: "River", duration: "3:20", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures2/V2-11.mp3" },
            { id: 'v2-12', title: "Forever", duration: "3:10", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures2/V2-12.mp3" },
            { id: 'v2-13', title: "Husband", duration: "3:05", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures2/V2-13.mp3" },
            { id: 'v2-14', title: "Lifestyle", duration: "3:20", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures2/V2-14.mp3" },
            { id: 'v2-15', title: "Sky City", duration: "3:40", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures2/V2-15.mp3" },
            { id: 'v2-16', title: "My Soul", duration: "3:10", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/vultures2/V2-16.mp3" }
        ]
    },
    {
        id: 'donda-2',
        title: 'DONDA 2',
        year: '2022',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/donda2.jpg?raw=true',
        tracks: [
            { id: 'd2-1', title: "True Love", duration: "2:25", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda2/D2-01.mp3" },
            { id: 'd2-2', title: "Broken Road", duration: "3:10", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda2/D2-02.mp3" },
            { id: 'd2-3', title: "Get Lost", duration: "3:25", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda2/D2-03.mp3" },
            { id: 'd2-4', title: "Too Easy", duration: "2:25", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda2/D2-04.mp3" },
            { id: 'd2-5', title: "Flowers", duration: "3:15", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda2/D2-05.mp3" },
            { id: 'd2-6', title: "Security", duration: "3:25", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda2/D2-06.mp3" },
            { id: 'd2-7', title: "We Did It Kid", duration: "3:25", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda2/D2-07.mp3" },
            { id: 'd2-8', title: "Pablo", duration: "2:45", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda2/D2-08.mp3" },
            { id: 'd2-9', title: "Happy", duration: "3:20", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda2/D2-09.mp3" },
            { id: 'd2-10', title: "Louie Bags", duration: "3:40", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda2/D2-10.mp3" },
            { id: 'd2-11', title: "Sci Fi", duration: "2:55", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda2/D2-11.mp3" },
            { id: 'd2-12', title: "Selfish", duration: "2:25", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda2/D2-12.mp3" },
            { id: 'd2-13', title: "Lord Lift Me Up", duration: "3:55", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda2/D2-13.mp3" },
            { id: 'd2-14', title: "Keep It Burning", duration: "3:10", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda2/D2-14.mp3" },
            { id: 'd2-15', title: "City of Gods", duration: "3:35", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda2/D2-15.mp3" },
            { id: 'd2-16', title: "First Time in a Long Time", duration: "3:00", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/donda2/D2-16.mp3" }
        ]
    },
    {
        id: 'yandhi',
        title: 'YANDHI',
        year: 'Unreleased',
        status: 'unreleased',
        cover: 'https://placehold.co/400x400/ff3b30/FFF?text=YANDHI',
        tracks: [
            { id: 'yan-1', title: "Wolves In The Streets", duration: "3:45", src: "https://www.soundhelix.com/data/mp3/SoundHelix-Song-1.mp3" },
            { id: 'yan-2', title: "Brothers (OG)", duration: "4:20", src: "https://www.soundhelix.com/data/mp3/SoundHelix-Song-2.mp3" },
            { id: 'yan-3', title: "New Body", duration: "3:30", src: "https://www.soundhelix.com/data/mp3/SoundHelix-Song-3.mp3" }
        ]
    }
];

// ==========================================
// ⚙️ STATE
// ==========================================
let currentView = 'albums'; // 'albums' | 'tracklist'
let activeFilter = 'all';
let selectedAlbum = null;
let currentTrackIndex = 0;
let isPlaying = false;
let currentPlaylist = []; // Flat array of whatever is currently playing

// DOM Refs
const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');
const trackListEl = document.getElementById('trackList');
const currentTitleEl = document.getElementById('currentTitle');
const currentArtistEl = document.getElementById('currentArtist');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

// ==========================================
// 🎨 RENDERERS
// ==========================================

/** Renders the album grid */
function renderAlbumGrid() {
    currentView = 'albums';
    selectedAlbum = null;
    trackListEl.innerHTML = '';

    const filtered = activeFilter === 'all'
        ? ALBUMS
        : ALBUMS.filter(a => a.status === activeFilter);

    if (filtered.length === 0) {
        trackListEl.innerHTML = '<p style="color:var(--muted);padding:2rem;">No albums found in this category.</p>';
        return;
    }

    const grid = document.createElement('div');
    grid.className = 'album-grid';

    filtered.forEach(album => {
        const card = document.createElement('div');
        card.className = 'album-card';
        card.innerHTML = `
            <div class="album-cover">
                <img src="${album.cover}" alt="${album.title}">
            </div>
            <div class="album-meta">
                <h4>${album.title}</h4>
                <p>${album.year} • ${album.tracks.length} Tracks</p>
            </div>
        `;
        card.addEventListener('click', () => openAlbum(album));
        grid.appendChild(card);
    });

    trackListEl.appendChild(grid);
}

/** Renders tracklist for a specific album */
function renderTracklist(album) {
    currentView = 'tracklist';
    selectedAlbum = album;
    currentPlaylist = album.tracks;
    trackListEl.innerHTML = '';

    // Back Button Header
    const backHeader = document.createElement('div');
    backHeader.className = 'tracklist-header';
    backHeader.innerHTML = `
        <button class="back-btn" id="backToAlbums">← BACK TO ALBUMS</button>
        <div class="tracklist-album-info">
            <h2>${album.title}</h2>
            <p>${album.year} • ${album.status.toUpperCase()}</p>
        </div>
    `;
    trackListEl.appendChild(backHeader);

    // Bind back button after rendering
    document.getElementById('backToAlbums').addEventListener('click', renderAlbumGrid);

    // Track Items
    album.tracks.forEach((track, index) => {
        const div = document.createElement('div');
        const isCurrent = currentPlaylist === album.tracks && index === currentTrackIndex && isPlaying;
        div.className = `track-item ${isCurrent ? 'playing' : ''}`;
        div.dataset.index = index;

        div.innerHTML = `
            <span class="track-num">${String(index + 1).padStart(2, '0')}</span>
            <div class="track-info">
                <h4>${track.title}</h4>
                <p>${album.title}</p>
            </div>
            <span class="track-duration">${track.duration}</span>
        `;

        div.addEventListener('click', () => playSpecificTrack(index));
        trackListEl.appendChild(div);
    });
}

function openAlbum(album) {
    renderTracklist(album);
}

// ==========================================
// 🔍 SIDEBAR FILTERING
// ==========================================
function setupFilters() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            activeFilter = e.target.dataset.filter;
            // Always go back to album grid when changing filters
            renderAlbumGrid();
        });
    });
}

// ==========================================
// ▶️ AUDIO ENGINE
// ==========================================
function loadTrack(index) {
    if (currentPlaylist.length === 0) return;
    currentTrackIndex = index;
    const track = currentPlaylist[index];
    const albumName = selectedAlbum ? selectedAlbum.title : 'YE ARCHIVE';

    audio.src = track.src;
    currentTitleEl.innerText = track.title;
    currentArtistEl.innerText = `Ye • ${albumName}`;

    // Re-render tracklist to update playing highlight
    if (currentView === 'tracklist') {
        renderTracklist(selectedAlbum);
    }
}

function togglePlay() {
    if (currentPlaylist.length === 0) return;
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerText = '▶';
    } else {
        audio.play().catch(err => console.warn("Playback blocked:", err));
        playPauseBtn.innerText = '⏸';
    }
    isPlaying = !isPlaying;
}

function playSpecificTrack(index) {
    loadTrack(index);
    isPlaying = true;
    audio.play().catch(err => console.warn("Playback blocked:", err));
    playPauseBtn.innerText = '⏸';
}

function nextTrack() {
    if (currentPlaylist.length === 0) return;
    playSpecificTrack((currentTrackIndex + 1) % currentPlaylist.length);
}

function prevTrack() {
    if (currentPlaylist.length === 0) return;
    playSpecificTrack((currentTrackIndex - 1 + currentPlaylist.length) % currentPlaylist.length);
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ==========================================
// 🎛️ AUDIO EVENTS
// ==========================================
function setupAudioEvents() {
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        seekBar.value = progress || 0;
        currentTimeEl.innerText = formatTime(audio.currentTime);
        durationEl.innerText = formatTime(audio.duration);
    });

    audio.addEventListener('ended', () => nextTrack());

    seekBar.addEventListener('input', () => {
        if (audio.duration) {
            audio.currentTime = (seekBar.value / 100) * audio.duration;
        }
    });

    playPauseBtn.addEventListener('click', togglePlay);
    document.getElementById('nextBtn').addEventListener('click', nextTrack);
    document.getElementById('prevBtn').addEventListener('click', prevTrack);
}

// ==========================================
// 🚀 INIT
// ==========================================
function init() {
    setupFilters();
    setupAudioEvents();
    renderAlbumGrid(); // Start at album grid
}

document.addEventListener('DOMContentLoaded', init);
