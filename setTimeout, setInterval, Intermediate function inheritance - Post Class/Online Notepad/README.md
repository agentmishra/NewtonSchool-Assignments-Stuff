Question 2
Online Notepad
Online Notepad

Create a notepad as shown in the picture.


Save My Notes is a feature-flag used to turn on/off the autosave feature.



When on, the text inside the textarea is stored or updated in the local storage of the browser every 1 sec.

When off, the local storage is no longer updated & contain only previously saved content.


Note:


1. On opening the app the Save My Notes checkbox is unchecked.


2. The key in the local storage should be 'autosave-data'.


3. The textarea should contain placeholder 'Write your notes here'.


Acceptance Criteria


All the components should be present with their correct id & value.

Autosave should only work when the feature-flag is turned on.

On closing the app & then reopening it, the textarea should contain previously saved content.
