<template>
  <div class="card-text">
    <div class="card-text-content">
      <div class="card-text-title">{{ data.title }}</div>
      <div class="card-text-content text-ellipsis-3">
        {{ data.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardText',
  props: {
    data: {
      type: Object,
      default: () => ({
        title: '交代是不可能的',
        content: `相隔上一次的更新我掰手指数一数，下意识的双腿一软，给各位小哥哥小姐姐们
      跪下了。自从有了对象后，周末几乎落下了主题的进度（邪魅的笑）。一边开发新的主题，一
      边收集您们给我反馈回来的"臭虫"，还有新的主题后台看见隔上一次的更新我掰手指数一数，下意识的双腿一软，给各位小哥哥小姐姐们
      跪下了。自从有了对象后，周末几乎落下了主题的进度（邪魅的笑）。一边开发新的主题，一
      边收集您们给我反馈回来的"臭虫"，还有新的主题后台看见隔上一次的更新我掰手指数一数，下意识的双腿一软，给各位小哥哥小姐姐们
      跪下了。自从有了对象后，周末几乎落下了主题的进度（邪魅的笑）。一边开发新的主题，一
      边收集您们给我反馈回来的"臭虫"，还有新的主题后台看见隔上一次的更新我掰手指数一数，下意识的双腿一软，给各位小哥哥小姐姐们
      跪下了。自从有了对象后，周末几乎落下了主题的进度（邪魅的笑）。一边开发新的主题，一
      边收集您们给我反馈回来的"臭虫"，还有新的主题后台看见隔上一次的更新我掰手指数一数，下意识的双腿一软，给各位小哥哥小姐姐们
      跪下了。自从有了对象后，周末几乎落下了主题的进度（邪魅的笑）。一边开发新的主题，一
      边收集您们给我反馈回来的"臭虫"，还有新的主题后台看见了一些大神在
      `,
      }),
    },
  },
}
</script>

<style lang="scss">
.card-text {
  position: relative;
  width: 800px;
  height: 180px;
  background-size: contain;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right center;
  border-radius: 6px;
  padding: 25px 20% 25px 2%;
  box-shadow: 0 1px 3px rgba(249, 249, 249, 0.08),
    0 0 0 1px rgba(26, 53, 71, 0.04), 0 1px 1px rgba(26, 53, 71, 0.06);
  background-image: url('~@/assets/components/card-text-bg.jpeg');
  cursor: pointer;
  .card-text-content {
    width: 600px;
    position: relative;
    z-index: 1;
    .card-text-title {
      font-size: 20px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.5);
    }
    .card-text-content {
      margin-top: 20px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    top: 0;
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, #fff 20%);
  }
}
</style>
